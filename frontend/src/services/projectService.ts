import api from './api'
import { Project } from '../types'

export const projectService = {
  getAll: async () => {
    const response = await api.get<Project[]>('/projects')
    return response.data
  },

  getById: async (id: string) => {
    const response = await api.get<Project>(`/projects/${id}`)
    return response.data
  },

  create: async (project: Omit<Project, '_id' | 'createdAt'>) => {
    const response = await api.post<Project>('/projects', project)
    return response.data
  },

  delete: async (id: string) => {
    await api.delete(`/projects/${id}`)
  },
}
