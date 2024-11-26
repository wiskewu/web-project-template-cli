import { execa } from 'execa'
export default async function run(bin, arg, opts = {}) {
  return execa(bin, arg, { stdio: 'inherit', ...opts })
}
