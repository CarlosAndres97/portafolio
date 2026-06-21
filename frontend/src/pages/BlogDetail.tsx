import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiClock,
  FiCalendar,
  FiShare2,
  FiCheck,
} from "react-icons/fi";
import { blogPosts } from "../data/blogPosts";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (!post) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!post) {
    return (
      <div className="container-custom py-32 text-center">
        <div className="max-w-md mx-auto glass-card p-10">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center mb-4">
            <span className="text-3xl">😕</span>
          </div>
          <p className="text-red-600 dark:text-red-400 mb-6 text-lg">
            Artículo no encontrado
          </p>
          <Link to="/blog" className="btn-primary inline-flex">
            <FiArrowLeft />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="container-custom py-32 max-w-4xl">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Volver al blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 border border-primary-200/50 dark:border-primary-800/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-balance">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-gray-200/50 dark:border-gray-800/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
              CS
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                Carlos Soriano
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <FiCalendar size={12} />
                  {new Date(post.createdAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1">
                  <FiClock size={12} />5 min lectura
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
          >
            {copied ? <FiCheck size={16} /> : <FiShare2 size={16} />}
            {copied ? "¡Copiado!" : "Compartir"}
          </button>
        </div>
      </motion.header>

      {/* Cover Image */}
      {post.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl mb-12 shadow-2xl"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg dark:prose-invert max-w-none 
                   prose-headings:font-display prose-headings:font-bold
                   prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                   prose-a:text-primary-600 dark:prose-a:text-primary-400 
                   prose-a:no-underline hover:prose-a:underline
                   prose-code:before:content-none prose-code:after:content-none
                   prose-code:bg-primary-50 dark:prose-code:bg-primary-950/50
                   prose-code:text-primary-700 dark:prose-code:text-primary-300
                   prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                   prose-code:font-mono prose-code:text-sm
                   prose-blockquote:border-l-primary-500
                   prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-900/50
                   prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                   prose-img:rounded-xl prose-img:shadow-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-800/50"
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Link to="/blog" className="btn-secondary inline-flex">
          <FiArrowLeft />
          Más artículos
        </Link>
      </motion.div>
    </article>
  );
}
