import api from './api'
import { BlogPost } from '../types'

export const blogService = {
  getAll: async () => {
    const response = await api.get<BlogPost[]>('/blog')
    return response.data
  },

  getBySlug: async (slug: string) => {
    const response = await api.get<BlogPost>(`/blog/${slug}`)
    return response.data
  },

  create: async (post: Omit<BlogPost, '_id' | 'createdAt' | 'updatedAt'>) => {
    const response = await api.post<BlogPost>('/blog', post)
    return response.data
  },

  delete: async (id: string) => {
    await api.delete(`/blog/${id}`)
  },
}
