export interface Project {
  _id: string
  title: string
  description: string
  image: string
  technologies: string[]
  link?: string
  github?: string
  createdAt: string
}

export interface ContactMessage {
  name: string
  email: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
}
