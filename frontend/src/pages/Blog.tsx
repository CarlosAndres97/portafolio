import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BlogPost } from "../types";
import { blogService } from "../services/blogService";
import { Link } from "react-router-dom";
import { FiClock, FiArrowUpRight, FiBookOpen, FiSearch, FiX } from "react-icons/fi";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filtered, setFiltered] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("Todos");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await blogService.getAll();
        setPosts(data);
        setFiltered(data);
      } catch (err) {
        setError("Error al cargar los artículos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let result = posts;
    if (search) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (activeTag !== "Todos") {
      result = result.filter((p) => p.tags?.includes(activeTag));
    }
    setFiltered(result);
  }, [search, activeTag, posts]);

  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.tags || []))
  );
  const tags = ["Todos", ...allTags];

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
          <span className="ml-2">Cargando artículos...</span>
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
        className="text-center mb-16"
      >
        <span className="badge mb-4">Blog</span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Ideas, tutoriales y <span className="gradient-text-static">reflexiones</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comparto lo que aprendo en mi camino como desarrollador. Tutoriales,
          consejos y experiencias del mundo tech.
        </p>
      </motion.div>

      {/* Search and Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 space-y-6"
      >
        <div className="relative max-w-md mx-auto">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar artículos..."
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

        {tags.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105"
                    : "bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-primary-500"
                }`}
              >
                {tag}
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
            <FiBookOpen size={28} className="text-gray-400" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {search || activeTag !== "Todos"
              ? "No se encontraron artículos con esos criterios."
              : "Aún no hay artículos. Vuelve pronto."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="relative glass-card overflow-hidden card-hover h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950 dark:to-accent-950">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FiBookOpen size={48} className="text-primary-500/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-300">
                      <FiArrowUpRight className="text-primary-600" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-800/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
                      <span className="flex items-center gap-1.5">
                        <FiClock size={12} />
                        {new Date(post.createdAt).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                        Leer más
                        <FiArrowUpRight className="group-hover:rotate-45 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
