import type { Options } from 'execa'
import { execa } from 'execa'

export default async function run(
  bin: string,
  arg: ReadonlyArray<string>,
  opts: Options = {},
) {
  return execa(bin, arg, { stdio: 'inherit', ...opts })
}
