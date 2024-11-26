declare const logger: {
  info: (...msgs: string[]) => void
  success: (...msgs: string[]) => void
  warning: (...msgs: string[]) => void
  error: (...msgs: string[]) => void
}
export default logger
