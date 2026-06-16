import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hola, soy <span className="text-primary-600">Desarrollador</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Creo experiencias web modernas, rápidas y accesibles. Especializado en React, Node.js y tecnologías modernas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn-primary inline-flex items-center gap-2 justify-center">
              Ver Proyectos <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2 justify-center">
              Contactarme
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Proyecto {i}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Descripción del proyecto y tecnologías utilizadas.
                  </p>
                  <Link to="/projects" className="text-primary-600 font-semibold hover:text-primary-700">
                    Ver más →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
