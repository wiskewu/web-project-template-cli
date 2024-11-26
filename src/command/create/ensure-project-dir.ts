import fse from 'fs-extra'
import path from 'path'

import logger from '../../utils/logger.js'

export async function ensureProjectDir(projectName?: string) {
  if (!projectName) {
    logger.error('Please specify the project name to create')
    process.exit(1)
  }
  if (projectName.indexOf(path.sep) > -1 || projectName.indexOf('..') > -1) {
    logger.error('Project name is invalid')
    process.exit(1)
  }
  const projectDirPath = path.resolve(process.cwd(), projectName)
  if (fse.existsSync(projectDirPath)) {
    // 检查是否为空目录
    const files = await fse.readdirSync(projectDirPath)
    if (files.length > 0) {
      logger.error(`Directory ${projectName} already exists and no empty`)
      process.exit(1)
    }
  }
  logger.info(`Creating directory ${projectName}`)
  fse.mkdirSync(projectDirPath, { recursive: false })
  return projectDirPath
}
