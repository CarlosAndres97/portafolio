import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiDownload,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";
import {
  skillCategories,
  experiences,
} from "../data/about";

export default function About() {
  return (
    <div className="container-custom py-32">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <span className="badge mb-4">Sobre mí</span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Pasión por <span className="gradient-text-static">crear</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Conoce más sobre mi trayectoria, habilidades y lo que me motiva como
          desarrollador.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
        {/* About text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 space-y-6"
        >
          <div className="glass-card p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              ¿Quién soy?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                Soy un{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  desarrollador web full stack
                </span>{" "}
                apasionado por crear soluciones digitales que marquen la
                diferencia. Con más de 3 años de experiencia, me especializo en
                construir aplicaciones web escalables, accesibles y con un
                diseño cuidado.
              </p>
              <p>
                Mi enfoque combina lo mejor del diseño y la ingeniería: creo
                interfaces intuitivas respaldadas por arquitecturas sólidas.
                Disfruto aprendiendo nuevas tecnologías y enfrentándome a
                desafíos complejos.
              </p>
              <p>
                Cuando no estoy programando, me encontrarás explorando nuevas
                herramientas, contribuyendo a proyectos open source o
                compartiendo conocimiento con la comunidad.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 p-8 text-white h-full flex flex-col">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-300/30 rounded-full blur-3xl" />

            <div className="relative flex-1 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                <FiDownload size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                Descarga mi CV
              </h3>
              <p className="text-white/80 mb-8 flex-1">
                Obtén más detalles sobre mi experiencia, formación y
                certificaciones en mi currículum vitae.
              </p>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 w-full bg-white text-primary-600 font-bold py-3.5 px-6 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
              >
                Descargar PDF
                <FiDownload />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
          Habilidades <span className="gradient-text-static">técnicas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <category.icon size={20} />
                </div>
                <h3 className="font-display text-xl font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 + 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
          Mi <span className="gradient-text-static">trayectoria</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative flex items-start gap-6 mb-10 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 mt-1.5">
                <div
                  className={`w-4 h-4 rounded-full ${
                    exp.current
                      ? "bg-primary-500 ring-4 ring-primary-500/30 animate-pulse"
                      : "bg-white dark:bg-gray-800 border-2 border-primary-500"
                  }`}
                />
              </div>

              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div
                  className={`glass-card p-6 ${
                    exp.current
                      ? "ring-2 ring-primary-500/50 shadow-lg shadow-primary-500/10"
                      : ""
                  }`}
                >
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 mb-3">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                      Actual
                    </span>
                  )}
                  <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    <FiBriefcase size={14} />
                    {exp.period}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 text-center"
      >
        <Link to="/contact" className="btn-primary group inline-flex">
          Trabajemos juntos
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
