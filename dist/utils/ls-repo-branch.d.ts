/**
 *
 * 从`
  04d6a6b13bf7d256c0586312046072ff657b4101        refs/heads/demo/wwq_tab_change
  131ac4c73ac7e2453015a36d117201cda19e635f        refs/heads/dev
  7839f0b591b5beaa0ba1a56da21b060ea87645a3        refs/heads/master
 * `中解析出'demo/wwq_tab_change'、'dev'
 * @param repoPath
 */
export default function lsRepoBranch(repoUrl: string): Promise<string[]>
