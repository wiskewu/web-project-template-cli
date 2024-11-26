/**
 * 下载一个repo
 * @param repo repo地址
 * @param branch repo分支
 * @param dest 存放目录地址
 */
export default function downloadGitRepo(
  repo: string,
  branch: string,
  dest: string,
): Promise<void>
