import type { IconType } from 'react-icons'
import {
  FiCpu,
  FiTool,
  FiHeart,
  FiServer,
  FiBox,
  FiEdit3,
  FiLayers,
  FiUsers,
  FiTrendingUp,
  FiTarget,
  FiCode,
} from 'react-icons/fi'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiReactquery,
  SiVitest,
  SiGithub,
  SiNetlify,
} from 'react-icons/si'

export interface SkillCategory {
  icon: IconType
  title: string
  color: string
  skills: { name: string; icon: IconType }[]
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
      { name: 'React (18 / 19)', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript (ES6+)', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Vite', icon: SiVite },
      { name: 'React Router', icon: SiReactrouter },
    ],
  },
  {
    icon: FiCpu,
    title: 'Backend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST APIs', icon: FiServer },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    icon: FiTool,
    title: 'Estado, datos y testing',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'TanStack Query', icon: SiReactquery },
      { name: 'Zustand', icon: FiBox },
      { name: 'React Hook Form', icon: FiEdit3 },
      { name: 'Hooks & Context API', icon: FiCode },
      { name: 'Radix UI', icon: FiLayers },
      { name: 'Vitest', icon: SiVitest },
    ],
  },
  {
    icon: FiHeart,
    title: 'Tools & Soft Skills',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git / GitHub', icon: SiGithub },
      { name: 'Netlify Functions', icon: SiNetlify },
      { name: 'Trabajo en equipo', icon: FiUsers },
      { name: 'Aprendizaje continuo', icon: FiTrendingUp },
      { name: 'Resolución de problemas', icon: FiTarget },
    ],
  },
]