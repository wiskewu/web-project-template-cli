export default async function getUserHome() {
  if (process.env.HOME) {
    return process.env.HOME
  }

  if (process.platform === 'win32') {
    return process.env.USERPROFILE || process.env.HOMEPATH || 'C:\\'
  }

  return process.env.HOME || '/home'
}
