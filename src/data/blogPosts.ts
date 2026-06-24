import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    _id: 'post-1',
    title: 'Cómo aprendí React en 2024',
    slug: 'como-aprendi-react-2024',
    excerpt:
      'Mi journey aprendiendo React desde cero: recursos, errores comunes y consejos prácticos para acelerar el aprendizaje.',
    content: `
      <h2>El comienzo</h2>
      <p>Cuando empecé con React venía de jQuery y vanilla JS. La curva de aprendizaje al principio se sintió empinada, pero una vez que los conceptos clic, todo encaja.</p>
      <h3>Recursos que me ayudaron</h3>
      <ul>
        <li>Documentación oficial (sí, en serio)</li>
        <li>Proyectos pequeños antes que tutoriales largos</li>
        <li>TypeScript desde el día uno</li>
      </ul>
      <h3>Errores comunes</h3>
      <p>El mayor error fue intentar aprender todo a la vez. React Router, estado global, server components... Mejor aprender un concepto, dominarlo, y luego añadir el siguiente.</p>
      <h2>Conclusión</h2>
      <p>React es una herramienta increíble. Con práctica constante y proyectos reales, lo que parece magia se convierte en código.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    tags: ['React', 'JavaScript', 'Frontend'],
    createdAt: '2024-12-01T08:00:00.000Z',
    updatedAt: '2024-12-01T08:00:00.000Z',
  },
  {
    _id: 'post-2',
    title: 'TypeScript: tips avanzados',
    slug: 'typescript-tips-avanzados',
    excerpt:
      'Técnicas de TypeScript que uso en el día a día: utility types, discriminated unions, y patrones para hacer tu código más seguro.',
    content: `
      <h2>Utility Types que uso constantemente</h2>
      <p>TypeScript viene con utility types que te ahorran escribir mucho código repetitivo.</p>
      <h3>Pick y Omit</h3>
      <p>Estos son mis favoritos para crear versiones específicas de tipos más grandes sin duplicar interfaces.</p>
      <h3>Discriminated unions</h3>
      <p>La mejor forma de modelar estados. Si tienes un objeto con <code>status</code> que puede ser varios valores, una discriminated union te da type safety completo.</p>
      <h2>Conclusión</h2>
      <p>TypeScript bien usado no es una carga, es una herramienta que te ahorra horas de debugging.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    createdAt: '2024-10-15T12:30:00.000Z',
    updatedAt: '2024-10-16T09:00:00.000Z',
  },
  {
    _id: 'post-3',
    title: 'Por qué elegí Vite sobre Webpack',
    slug: 'por-que-elegi-vite',
    excerpt:
      'Una comparativa honesta entre Vite y Webpack: velocidad de desarrollo, ecosystem, y cuándo tiene sentido cada uno.',
    content: `
      <h2>El cambio</h2>
      <p>Después de años con Webpack, el cambio a Vite fue revelador. Lo que más me impactó fue el tiempo de inicio del dev server.</p>
      <h3>Velocidad</h3>
      <p>Vite usa esbuild para pre-bundlear dependencias y Rollup para producción. El resultado es HMR casi instantáneo incluso en proyectos grandes.</p>
      <h3>Ecosystem</h3>
      <p>La mayoría de plugins de Webpack tienen equivalente en Vite, y la configuración es dramáticamente más simple.</p>
      <h2>¿Cuándo Webpack sigue siendo mejor?</h2>
      <p>Para setups legacy muy customizados, Webpack sigue siendo el rey. Pero para proyectos nuevos, Vite es el camino.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    tags: ['Vite', 'Webpack', 'Tools', 'Frontend'],
    createdAt: '2024-08-20T15:45:00.000Z',
    updatedAt: '2024-08-20T15:45:00.000Z',
  },
]
