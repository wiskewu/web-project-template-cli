import modifyRepoAfterClone from '../../template/modern-html-starter/index.js'

export interface TemplateRepo {
  name: string
  description: string
  url: string

  afterHook?: (repoDirPath: string, projectName: string) => Promise<void>
}

const templateRepoList: TemplateRepo[] = [
  {
    name: 'modern-html-starter-template',
    description: 'Modern HTML Starter Template',
    url: 'https://github.com/harryheman/modern-html-starter-template',
    afterHook: modifyRepoAfterClone,
  },
]

export default templateRepoList
