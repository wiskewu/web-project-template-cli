export default function onexit(fn: (...params: unknown[]) => void) {
  process.on('exit', (code) => {
    fn.call(null, code)
  })
  process.on('uncaughtException', (e) => {
    fn.call(null, e)
    throw e
  })
}
