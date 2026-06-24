import type { Project } from '../types'

export const projects: Project[] = [
  {
    _id: 'proj-1',
    title: 'E-commerce Platform',
    description:
      'Tienda online completa con carrito de compras, pasarela de pago y panel de administración. Sistema de autenticación, gestión de inventario y dashboard de analytics.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    link: 'https://demo.example.com',
    github: 'https://github.com/usuario/ecommerce',
    createdAt: '2024-11-15T10:00:00.000Z',
  },
  {
    _id: 'proj-2',
    title: 'Task Manager Pro',
    description:
      'Aplicación de gestión de tareas con tableros Kanban, colaboración en tiempo real y notificaciones. Drag & drop, filtros avanzados y modo offline.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://demo.example.com',
    github: 'https://github.com/usuario/task-manager',
    createdAt: '2024-09-22T14:30:00.000Z',
  },
  {
    _id: 'proj-3',
    title: 'Weather Dashboard',
    description:
      'Dashboard interactivo del clima con mapas, pronósticos extendidos y visualización de datos históricos. Integración con múltiples APIs meteorológicas.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Vite'],
    link: 'https://demo.example.com',
    github: 'https://github.com/usuario/weather-dashboard',
    createdAt: '2024-07-10T09:15:00.000Z',
  },
  {
    _id: 'proj-4',
    title: 'AI Chat Assistant',
    description:
      'Asistente conversacional potenciado por IA con soporte multi-idioma, contexto persistente y exportación de conversaciones. UI minimalista y accesible.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Node.js', 'WebSockets'],
    github: 'https://github.com/usuario/ai-chat',
    createdAt: '2024-04-05T16:45:00.000Z',
  },
]
