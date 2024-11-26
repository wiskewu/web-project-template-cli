import fse from 'fs-extra'
import path from 'path'
// import run from '../../utils/run.js'
/**
 * 在创建项目之后，针对性修改仓库
 * @param projectDirPath 项目目录地址
 */
export default async function modifyRepoAfterClone(
  projectDirPath,
  projectName,
) {
  // cd into project
  // await run('cd', [projectDirPath])
  // remove git
  const gitDir = path.join(projectDirPath, '.git')
  await fse.remove(gitDir)
  if (projectName) {
    // TODO...
  }
}
