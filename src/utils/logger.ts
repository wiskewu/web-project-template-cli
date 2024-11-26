import picocolors from 'picocolors'

const logger = {
  info: (...msgs: string[]) =>
    console.log(`${picocolors.cyan('[-]')}`, ...msgs),
  success: (...msgs: string[]) =>
    console.log(`${picocolors.green('[√]')}`, ...msgs),
  warning: (...msgs: string[]) =>
    console.log(`${picocolors.yellow('[!]')}`, ...msgs),
  error: (...msgs: string[]) =>
    console.log(`${picocolors.red('[x]')}`, ...msgs),
}

export default logger
