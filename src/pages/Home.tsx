import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiCode,
  FiZap,
  FiLayers,
  FiArrowUpRight,
} from "react-icons/fi";
import { projects } from "../data/projects";

const stats = [
  { value: "6+", label: "Meses de experiencia en proyectos" },
  { value: "8+", label: "Proyectos completados" },
  { value: "10+", label: "Tecnologías" },
  { value: "∞", label: "Café consumido" },
];

const features = [
  {
    icon: FiCode,
    title: "Código Limpio",
    description:
      "Escribo código mantenible, escalable y siguiendo las mejores prácticas de la industria.",
  },
  {
    icon: FiZap,
    title: "Performance First",
    description:
      "Aplicaciones optimizadas para ofrecer la mejor experiencia de usuario posible.",
  },
  {
    icon: FiLayers,
    title: "UI Moderna",
    description:
      "Interfaces atractivas, accesibles y responsive que enamoran a los usuarios.",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-blobs pt-20">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-size mask-radial opacity-50 dark:opacity-20" />

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
            >
              Carlos Andres Soriano
              <br />
              <span className="gradient-text">Desarrollador Web</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto text-balance"
            >
              Desarrollador Web Full Stack especializado en crear aplicaciones web 
               <b className="hidden sm:inline gradient-text-static"> modernas, rápidas y accesibles</b> con las
              tecnologías más actuales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link to="/projects" className="btn-primary group">
                Ver Proyectos
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary group">
                Hablemos
                <FiMail />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-5 hover:scale-105 transition-transform duration-300"
                >
                  <div className="font-display text-3xl md:text-4xl font-extrabold gradient-text-static">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Social Links Floating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden lg:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-20"
          >
            {[
              { icon: FiGithub, href: "https://github.com/CarlosAndres97", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/carlos-andres-soriano-gonzalez-4a17a7249?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 glass rounded-full hover:scale-110 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 group"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              ¿Por qué <span className="gradient-text-static">trabajar conmigo</span>?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Combino creatividad, tecnología y atención al detalle para entregar
              productos increíbles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative glass-card p-8 card-hover overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white mb-5 shadow-lg shadow-primary-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <feature.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div>
              <span className="badge mb-4">Portafolio</span>
              <h2 className="section-title">
                Proyectos <span className="gradient-text-static">destacados</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl">
                Una selección de mis trabajos más recientes y significativos.
              </p>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all"
            >
              Ver todos
              <FiArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => navigate(`/projects/${project._id}`)}
                className="group cursor-pointer"
              >
                <div className="relative glass-card overflow-hidden card-hover">
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950 dark:to-accent-950">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FiCode size={48} className="text-primary-500/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-300">
                      <FiArrowUpRight className="text-primary-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-800/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-20" />
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-300/20 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold ">
                ¿Listo para empezar?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Cuéntame sobre tu proyecto y trabajemos juntos para hacerlo
                realidad.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Iniciar un proyecto
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
