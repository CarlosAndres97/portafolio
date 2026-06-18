import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCalendar,
  FiCode,
} from "react-icons/fi";
import { useProject } from "../hooks/useProjects";

export default function ProjectDescription() {
  const { id } = useParams();
  const { project, loading } = useProject(id);

  if (loading) {
    return (
      <div className="container-custom py-32 text-center">
        <div className="inline-flex items-center gap-3 text-gray-600 dark:text-gray-400">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" />
          <div
            className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          />
          <div
            className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <span className="ml-2">Cargando proyecto...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container-custom py-32 text-center">
        <div className="max-w-md mx-auto glass-card p-10">
          <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
            <span className="text-3xl">🔍</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Proyecto no encontrado
          </p>
          <Link to="/projects" className="btn-primary inline-flex">
            <FiArrowLeft />
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-32">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Volver a proyectos
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mb-12"
      >
        <span className="badge mb-4">
          <FiCode size={12} />
          Proyecto
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-balance">
          {project.description}
        </p>
      </motion.div>

      {/* Cover Image */}
      {project.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl mb-12 shadow-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950 dark:to-accent-950"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-[500px] object-cover"
          />
        </motion.div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <h2 className="font-display text-2xl font-bold mb-4">
              Sobre el proyecto
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {project.description}
            </p>
          </motion.div>

          {/* Tech Stack */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8"
            >
              <h2 className="font-display text-2xl font-bold mb-4">
                Stack tecnológico
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950/50 dark:to-accent-950/50 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-800/50"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Links Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="font-display text-lg font-bold mb-4">Enlaces</h3>
            <div className="space-y-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-primary-500/30"
                >
                  <span className="flex items-center gap-2">
                    <FiExternalLink size={16} />
                    Ver Demo
                  </span>
                  <FiArrowLeft className="rotate-180" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FiGithub size={16} />
                    Código fuente
                  </span>
                  <FiArrowLeft className="rotate-180" />
                </a>
              )}
              {!project.link && !project.github && (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                  No hay enlaces disponibles
                </p>
              )}
            </div>
          </motion.div>

          {/* Date Card */}
          {project.createdAt && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                <FiCalendar size={18} />
                Fecha
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {new Date(project.createdAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 p-6 text-white"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <h3 className="font-display text-lg font-bold mb-2">
                ¿Te gusta este proyecto?
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Hablemos sobre cómo puedo ayudarte con el tuyo.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                Contactar
                <FiArrowLeft className="rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
