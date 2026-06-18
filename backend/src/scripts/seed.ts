import dotenv from 'dotenv'
import Project from '../models/Project'
import BlogPost from '../models/BlogPost'
import { connectDB } from '../config/database'

dotenv.config()

const seedProjects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    link: 'https://example.com',
    github: 'https://github.com/example/ecommerce',
  },
  {
    title: 'Task Management App',
    description:
      'Aplicación de gestión de tareas con tableros Kanban, colaboración en tiempo real y notificaciones.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.io'],
    link: 'https://example.com',
    github: 'https://github.com/example/tasks',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Dashboard analytics para redes sociales con gráficos interactivos, métricas en tiempo real y reportes.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB', 'Chart.js'],
    link: 'https://example.com',
    github: 'https://github.com/example/dashboard',
  },
  {
    title: 'AI Chat Assistant',
    description:
      'Asistente de chat inteligente potenciado por IA con procesamiento de lenguaje natural y respuestas contextuales.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    technologies: ['React', 'Python', 'OpenAI', 'FastAPI', 'Redis'],
    link: 'https://example.com',
    github: 'https://github.com/example/chat-ai',
  },
  {
    title: 'Fitness Tracker',
    description:
      'Aplicación móvil-first para tracking de ejercicios, nutrición y progreso físico con sincronización en la nube.',
    image:
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Firebase', 'Node.js', 'TypeScript'],
    link: 'https://example.com',
    github: 'https://github.com/example/fitness',
  },
  {
    title: 'Portfolio Website',
    description:
      'Sitio web portfolio moderno con animaciones fluidas, modo oscuro y diseño totalmente responsive.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://example.com',
    github: 'https://github.com/example/portfolio',
  },
]

const seedBlogPosts = [
  {
    title: 'Cómo construí mi portfolio con React y Vite',
    slug: 'como-construi-mi-portfolio-con-react-y-vite',
    excerpt:
      'Un recorrido por las decisiones técnicas que tomé al construir mi portfolio personal, desde la elección del framework hasta el despliegue.',
    content: `
      <h2>Introducción</h2>
      <p>Construir un portfolio personal es uno de los mejores proyectos que puedes hacer como desarrollador. En este artículo te cuento cómo lo construí yo.</p>
      <h2>¿Por qué React + Vite?</h2>
      <p>Vite ofrece una experiencia de desarrollo increíble con HMR casi instantáneo y un bundle de producción optimizado. La combinación con React me da toda la potencia que necesito.</p>
      <h2>El stack completo</h2>
      <ul>
        <li>React 18 con TypeScript</li>
        <li>Vite como build tool</li>
        <li>Tailwind CSS para estilos</li>
        <li>Framer Motion para animaciones</li>
        <li>React Router para navegación</li>
      </ul>
      <h2>Conclusión</h2>
      <p>El resultado es un portfolio rápido, accesible y visualmente atractivo que refleja mis habilidades como desarrollador.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    tags: ['React', 'Vite', 'Portfolio'],
  },
  {
    title: 'TypeScript: Tips para un código más limpio',
    slug: 'typescript-tips-para-un-codigo-mas-limpio',
    excerpt:
      'Tips prácticos para escribir TypeScript más mantenible, type-safe y fácil de leer en proyectos reales.',
    content: `
      <h2>Introducción</h2>
      <p>TypeScript es mucho más que "JavaScript con tipos". Aquí van algunos tips que aprendí en proyectos reales.</p>
      <h2>1. Usa tipos en lugar de interfaces para unions</h2>
      <p>Los tipos son más versátiles que las interfaces cuando necesitas unions, intersections o tipos mapped.</p>
      <h2>2. Evita any como escape</h2>
      <p>Usa unknown cuando no sepas el tipo y haz narrowing con type guards.</p>
      <h2>3. Aprovecha la inferencia de tipos</h2>
      <p>No anotes tipos innecesariamente. Deja que TypeScript infiera cuando sea posible.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    tags: ['TypeScript', 'Best Practices'],
  },
  {
    title: 'MongoDB vs PostgreSQL: ¿Cuándo usar cada uno?',
    slug: 'mongodb-vs-postgresql-cuando-usar-cada-uno',
    excerpt:
      'Comparación honesta entre MongoDB y PostgreSQL para ayudarte a elegir la base de datos correcta para tu próximo proyecto.',
    content: `
      <h2>Introducción</h2>
      <p>Elegir la base de datos correcta es crucial. Veamos las diferencias entre MongoDB y PostgreSQL.</p>
      <h2>Cuándo usar MongoDB</h2>
      <p>Ideal para datos no estructurados, prototipos rápidos y cuando el esquema evoluciona frecuentemente.</p>
      <h2>Cuándo usar PostgreSQL</h2>
      <p>Perfecto para datos relacionales, transacciones ACID y consultas complejas con JOINs.</p>
      <h2>Conclusión</h2>
      <p>Ambas son excelentes opciones. La clave está en entender las necesidades de tu proyecto.</p>
    `,
    image:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop',
    tags: ['MongoDB', 'PostgreSQL', 'Database'],
  },
]

const seed = async () => {
  try {
    await connectDB()

    // Limpiar
    await Project.deleteMany({})
    await BlogPost.deleteMany({})

    // Insertar
    await Project.insertMany(seedProjects)
    await BlogPost.insertMany(seedBlogPosts)

    console.log(`✓ ${seedProjects.length} proyectos insertados`)
    console.log(`✓ ${seedBlogPosts.length} artículos insertados`)

    process.exit(0)
  } catch (error) {
    console.error('Error al sembrar la base de datos:', error)
    process.exit(1)
  }
}

seed()
