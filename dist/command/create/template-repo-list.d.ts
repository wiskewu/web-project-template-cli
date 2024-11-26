export interface TemplateRepo {
  name: string
  description: string
  url: string
  afterHook?: (repoDirPath: string, projectName: string) => Promise<void>
}
declare const templateRepoList: TemplateRepo[]
export default templateRepoList
