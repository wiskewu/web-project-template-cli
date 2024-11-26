import fse from 'fs-extra'
import path from 'path'

import { TMP_DIR_NAME } from '../config/index.js'
import getUserHome from './user-home.js'

export async function getTmpCacheDir() {
  const home = await getUserHome()
  return path.join(home, TMP_DIR_NAME)
}

export async function cleanupTmpCacheDir() {
  const tmpDir = await getTmpCacheDir()
  if (fse.existsSync(tmpDir)) {
    // will create dir if not exists
    fse.emptyDirSync(tmpDir)
  } else {
    fse.ensureDirSync(tmpDir)
  }
}

export async function initTmpCacheDir() {
  const tmpDir = await getTmpCacheDir()
  if (!fse.existsSync(tmpDir)) {
    fse.mkdirpSync(tmpDir)
  }
}
