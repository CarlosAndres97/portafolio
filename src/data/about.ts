import type { IconType } from 'react-icons'
import {
  FiCode,
  FiCpu,
  FiTool,
  FiHeart,
} from 'react-icons/fi'

export interface SkillCategory {
  icon: IconType
  title: string
  color: string
  skills: { name: string; level: number }[]
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  current: boolean
}

export const experiences: Experience[] = [
  {
    role: 'Formación autodidacta continua',
    company: 'Cursos y práctica propia',
    period: '2022 - Presente',
    description:
      'Más de 25 repositorios públicos documentando un proceso de aprendizaje constante: cursos de Fernando Herrera (React, NestJS, Node), certificaciones de freeCodeCamp y ejercicios progresivos. Stack dominante: JavaScript, TypeScript, React, Node.js y bases de datos relacionales.',
    current: true,
  },
  {
    role: 'Proyectos full-stack propios',
    company: 'Open Source (GitHub)',
    period: '2024 - Presente',
    description:
      'Diseño y desarrollo end-to-end de aplicaciones completas: e-commerce Teslo Shop con catálogo y checkout, par heroes-app con SPA en React y API en NestJS, y node-rest-server con Express 5, Prisma y PostgreSQL.',
    current: true,
  },
  {
    role: 'Portafolio Web Profesional',
    company: 'casg-functions.netlify.app',
    period: '2026',
    description:
      'Desarrollo de este sitio con React 18, TypeScript, Vite, Tailwind CSS, framer-motion y React Router v6 con lazy loading. Formulario de contacto integrado con Netlify Functions y persistencia de tema claro/oscuro en localStorage.',
    current: true,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    icon: FiCode,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React (18 / 19)', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Vite', level: 88 },
      { name: 'React Router', level: 85 },
    ],
  },
  {
    icon: FiCpu,
    title: 'Backend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'NestJS', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Prisma', level: 80 },
      { name: 'PostgreSQL', level: 78 },
    ],
  },
  {
    icon: FiTool,
    title: 'Estado, datos y testing',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'TanStack Query', level: 82 },
      { name: 'Zustand', level: 78 },
      { name: 'React Hook Form', level: 80 },
      { name: 'Hooks & Context API', level: 90 },
      { name: 'Radix UI', level: 75 },
      { name: 'Vitest + Testing Library', level: 80 },
    ],
  },
  {
    icon: FiHeart,
    title: 'Tools & Soft Skills',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Netlify Functions (Serverless)', level: 75 },
      { name: 'Trabajo en equipo', level: 95 },
      { name: 'Aprendizaje continuo', level: 98 },
      { name: 'Resolución de problemas', level: 92 },
    ],
  },
]