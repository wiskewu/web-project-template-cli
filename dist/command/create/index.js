import fse from 'fs-extra'
import inquirer from 'inquirer'
import ora from 'ora'
import path from 'path'

import downloadGitRepo from '../../utils/download-git-repo.js'
import logger from '../../utils/logger.js'
import onexit from '../../utils/onexit.js'
import {
  cleanupTmpCacheDir,
  getTmpCacheDir,
} from '../../utils/tmp-cache-dir.js'
import { ensureProjectDir } from './ensure-project-dir.js'
import { getBranchQuestions, getTemplateQuestions } from './get-questions.js'
import templateRepoList from './template-repo-list.js'
export default async function create(projectName) {
  let done = false
  /* eslint-disable */
  let projectDirPath
  let tmpDirRoot
  /* eslint-enable */
  function onErrorOrExit() {
    logger.info('program exiting...')
    if (!done) {
      if (projectDirPath) fse.rmdirSync(projectDirPath)
      if (tmpDirRoot) fse.rmdirSync(tmpDirRoot)
      done = true
    }
  }
  // install events
  onexit(onErrorOrExit)
  // ===== go =====
  tmpDirRoot = await getTmpCacheDir()
  // clean up the tmp cache dir
  await cleanupTmpCacheDir()
  // create project dir
  projectDirPath = await ensureProjectDir(projectName)
  // choose template repo with branch
  const { template } = await inquirer.prompt(getTemplateQuestions())
  const templateConfig = templateRepoList.find((item) => item.name === template)
  const { branch } = await inquirer.prompt(
    await getBranchQuestions(templateConfig.url),
  )
  // download template repo
  const spinner = ora(
    `downloading template from ${templateConfig.url}#${branch}\n`,
  ).start()
  const tmpRepoDest = path.resolve(tmpDirRoot, templateConfig.name)
  await downloadGitRepo(templateConfig.url, branch, tmpRepoDest)
  spinner.text = 'downloaded template successfully!'
  // copy repo to project dir
  await fse.copySync(tmpRepoDest, projectDirPath)
  // execute post hook
  if (templateConfig.afterHook) {
    spinner.text = 'setup project...'
    await templateConfig.afterHook(projectDirPath, projectName)
  }
  // TODO: extract npm tool from package-lock.json/yarn.lock/pnpm-lock.yaml
  spinner.succeed(`
    successfully create project: \`${projectName}\` with template \`${template}\` !
    run \`cd ${projectName} && pnpm install\`
    and you are ready to go!
  `)
  // done
  await cleanupTmpCacheDir()
  done = true
}
