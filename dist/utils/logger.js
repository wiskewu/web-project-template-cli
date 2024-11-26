import picocolors from 'picocolors'
const logger = {
  info: (...msgs) => console.log(`${picocolors.cyan('[-]')}`, ...msgs),
  success: (...msgs) => console.log(`${picocolors.green('[√]')}`, ...msgs),
  warning: (...msgs) => console.log(`${picocolors.yellow('[!]')}`, ...msgs),
  error: (...msgs) => console.log(`${picocolors.red('[x]')}`, ...msgs),
}
export default logger
