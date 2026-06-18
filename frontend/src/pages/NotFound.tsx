import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHome, FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center container-custom py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="font-display text-9xl font-extrabold gradient-text mb-4">
          404
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <FiHome size={16} />
            Ir al inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <FiArrowLeft size={16} />
            Volver atrás
          </button>
        </div>
      </motion.div>
    </div>
  )
}
