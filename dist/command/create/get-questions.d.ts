export interface TemplateAnswer {
  template: string
  branch: string
}
export declare function getTemplateQuestions(): readonly [
  {
    readonly type: 'list'
    readonly name: 'template'
    readonly message: 'Select a template'
    readonly choices: string[]
  },
]
export declare function getBranchQuestions(repoUrl: string): Promise<
  readonly [
    {
      readonly type: 'list'
      readonly name: 'branch'
      readonly message: 'Select a branch'
      readonly choices: string[]
    },
  ]
>
