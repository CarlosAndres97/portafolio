import type { Project } from '../types'

export const projects: Project[] = [
  {
    _id: 'proj-1',
    title: 'Teslo Shop — E-commerce',
    description:
      'Tienda online completa con catálogo, carrito, autenticación, checkout y panel de administración. Gestión de estado global con Zustand, fetching y caché con TanStack Query, formularios tipados con React Hook Form y UI accesible construida sobre Radix UI.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'React Hook Form',
      'Radix UI',
      'Axios',
      'React Router',
    ],
    github: 'https://github.com/CarlosAndres97/teslo-shop-frontend-react',
    createdAt: '2026-06-15T10:00:00.000Z',
  },
  {
    _id: 'proj-2',
    title: 'Heroes App — Full-Stack',
    description:
      'Aplicación full-stack con SPA en React y API en NestJS. Listado paginado de héroes con búsqueda, autenticación, navegación avanzada con Radix UI y suite de pruebas con Vitest + Testing Library. Repositorio complementario del backend disponible en la misma cuenta.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'NestJS',
      'Radix UI',
      'Vitest',
      'Testing Library',
      'React Router',
    ],
    github: 'https://github.com/CarlosAndres97/heroes-app-front',
    createdAt: '2026-01-29T14:30:00.000Z',
  },
  {
    _id: 'proj-3',
    title: 'Node REST Server',
    description:
      'API REST profesional con Express 5, ORM Prisma y PostgreSQL. Configuración tipada con env-var, migraciones automatizadas, estructura modular y arranque con ts-node-dev para desarrollo rápido.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    technologies: [
      'Node.js',
      'Express',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'REST APIs',
      'dotenv',
    ],
    github: 'https://github.com/CarlosAndres97/node-rest-server',
    createdAt: '2026-05-12T09:15:00.000Z',
  },
  {
    _id: 'proj-4',
    title: 'Gifs App',
    description:
      'Buscador de GIFs consumiendo la API de Giphy con React 19 y TypeScript estricto. Peticiones HTTP con Axios y mocks para testing, suite de pruebas con Vitest + Testing Library + jsdom. Demuestra manejo de estado, hooks personalizados y consumo de APIs externas.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Axios',
      'Vitest',
      'Testing Library',
    ],
    github: 'https://github.com/CarlosAndres97/gifs-app',
    createdAt: '2026-06-10T16:45:00.000Z',
  },
]