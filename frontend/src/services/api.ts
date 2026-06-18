import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { config } from '../config/env'

const api: AxiosInstance = axios.create({
  baseURL: config.apiUrl,
  timeout: config.apiTimeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (requestConfig: InternalAxiosRequestConfig) => {
    if (config.isDev) {
      console.debug(`[API] ${requestConfig.method?.toUpperCase()} ${requestConfig.url}`)
    }
    return requestConfig
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (config.isDev) {
      console.error(
        `[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}:`,
        error.message
      )
    }
    return Promise.reject(error)
  }
)

export default api
