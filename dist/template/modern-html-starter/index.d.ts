/**
 * 在创建项目之后，针对性修改仓库
 * @param projectDirPath 项目目录地址
 */
export default function modifyRepoAfterClone(
  projectDirPath: string,
  projectName: string,
): Promise<void>
