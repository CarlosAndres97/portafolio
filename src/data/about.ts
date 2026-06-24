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

export const skillCategories: SkillCategory[] = [
  {
    icon: FiCode,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    icon: FiCpu,
    title: 'Backend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js / Express', level: 92 },
      { name: 'MongoDB / PostgreSQL', level: 88 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    icon: FiTool,
    title: 'Tools & DevOps',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'Vite / Webpack', level: 88 },
      { name: 'CI/CD', level: 82 },
    ],
  },
  {
    icon: FiHeart,
    title: 'Soft Skills',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Trabajo en equipo', level: 95 },
      { name: 'Comunicación', level: 90 },
      { name: 'Resolución de problemas', level: 92 },
      { name: 'Aprendizaje continuo', level: 98 },
    ],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2023 - Presente',
    description:
      'Lidero el desarrollo de aplicaciones web escalables con React y Node.js. Implemento arquitecturas modernas y mentorizo a desarrolladores junior.',
    current: true,
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup Innovadora',
    period: '2022 - 2023',
    description:
      'Desarrollé el producto MVP desde cero. Diseñé APIs REST, integré pasarelas de pago y optimicé el rendimiento de la aplicación.',
    current: false,
  },
  {
    role: 'Frontend Developer',
    company: 'Agencia Digital',
    period: '2021 - 2022',
    description:
      'Creé interfaces de usuario modernas y responsivas para diversos clientes. Trabajé con React, Vue y herramientas modernas.',
    current: false,
  },
  {
    role: 'Junior Web Developer',
    company: 'Primera Empresa',
    period: '2020 - 2021',
    description:
      'Comencé mi carrera profesional construyendo sitios web y aprendiendo las mejores prácticas de la industria.',
    current: false,
  },
]
