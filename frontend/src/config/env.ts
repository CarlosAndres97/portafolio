interface AppConfig {
  apiUrl: string
  apiTimeout: number
  appName: string
  isDev: boolean
}

const DEFAULT_API_URL = 'http://localhost:5000/api'
const DEFAULT_API_TIMEOUT = 10000
const DEFAULT_APP_NAME = 'Portfolio'

const getEnvVar = (key: string, fallback: string): string => {
  const value = import.meta.env[key as keyof ImportMetaEnv]
  return (value as string | undefined) ?? fallback
}

const getEnvNumber = (key: string, fallback: number): number => {
  const value = import.meta.env[key as keyof ImportMetaEnv]
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

export const config: AppConfig = {
  apiUrl: getEnvVar('VITE_API_URL', DEFAULT_API_URL),
  apiTimeout: getEnvNumber('VITE_API_TIMEOUT', DEFAULT_API_TIMEOUT),
  appName: getEnvVar('VITE_APP_NAME', DEFAULT_APP_NAME),
  isDev: import.meta.env.DEV,
}
