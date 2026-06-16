import api from './api'
import { ContactMessage, ContactResponse } from '../types'

export const contactService = {
  send: async (data: ContactMessage) => {
    const response = await api.post<ContactResponse>('/contact', data)
    return response.data
  },
}
