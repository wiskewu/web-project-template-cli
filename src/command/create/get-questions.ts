import lsRepoBranch from '../../utils/ls-repo-branch.js'
import templateRepoList from './template-repo-list.js'

export interface TemplateAnswer {
  template: string
  branch: string
}

export function getTemplateQuestions() {
  return [
    {
      type: 'list',
      name: 'template',
      message: 'Select a template',
      choices: templateRepoList.map((template) => template.name),
    },
  ] as const
}

export async function getBranchQuestions(repoUrl: string) {
  const branches = await lsRepoBranch(repoUrl)
  return [
    {
      type: 'list',
      name: 'branch',
      message: 'Select a branch',
      choices: branches,
    },
  ] as const
}
