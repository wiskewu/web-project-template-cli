import { program } from 'commander'

import commands from './command/index.js'
export function main() {
  program.name('ptc').usage('<command> [options]')
  program
    .command('create [project-name]')
    .description('create a new project')
    .action((projectName) => {
      commands.create(projectName)
    })
  program.parse(process.argv)
  if (!program.args.length) {
    program.help()
  }
}
