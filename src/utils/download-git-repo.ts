import run from './run.js'

/**
 * 下载一个repo
 * @param repo repo地址
 * @param branch repo分支
 * @param dest 存放目录地址
 */
export default async function downloadGitRepo(
  repo: string,
  branch: string,
  dest: string,
) {
  await run('git', [
    'clone',
    '--depth=1',
    '--branch',
    branch,
    '--single-branch',
    repo,
    dest,
  ])
}
