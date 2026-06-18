import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Project } from "../types";
import { projectService } from "../services/projectService";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiCode,
  FiX,
} from "react-icons/fi";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getAll();
        setProjects(data);
        setFiltered(data);
      } catch (err) {
        setError("Error al cargar los proyectos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    let result = projects;
    if (search) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()) ||
          p.technologies.some((t) =>
            t.toLowerCase().includes(search.toLowerCase())
          )
      );
    }
    if (activeFilter !== "Todos") {
      result = result.filter((p) => p.technologies.includes(activeFilter));
    }
    setFiltered(result);
  }, [search, activeFilter, projects]);

  // Get all unique technologies for filter
  const allTechs = Array.from(
    new Set(projects.flatMap((p) => p.technologies || []))
  );
  const filters = ["Todos", ...allTechs];

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
          <span className="ml-2">Cargando proyectos...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <span className="badge mb-4">Portafolio</span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Mis <span className="gradient-text-static">proyectos</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Una colección de proyectos donde aplico creatividad, tecnología y
          atención al detalle.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 space-y-6"
      >
        {/* Search */}
        <div className="relative max-w-md">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar proyectos, tecnologías..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field pl-11 pr-11"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <FiX />
            </button>
          )}
        </div>

        {/* Filter chips */}
        {filters.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105"
                    : "bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-primary-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {error && (
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl mb-8">
          {error}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="inline-flex w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 items-center justify-center mb-4">
            <FiCode size={28} className="text-gray-400" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {search || activeFilter !== "Todos"
              ? "No se encontraron proyectos con esos criterios."
              : "Aún no hay proyectos. Vuelve pronto."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => navigate(`/projects/${project._id}`)}
              className="group cursor-pointer"
            >
              <div className="relative glass-card overflow-hidden card-hover h-full flex flex-col">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-300">
                    <FiArrowUpRight className="text-primary-600" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 4 && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {(project.link || project.github) && (
                    <div
                      className="flex items-center gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-800/50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-2.5 transition-all"
                        >
                          <FiExternalLink size={14} />
                          Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:gap-2.5 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                        >
                          <FiGithub size={14} />
                          Código
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
