import { useState, useEffect } from 'react'
import { BlogPost } from '../types'
import { blogService } from '../services/blogService'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await blogService.getAll()
        setPosts(data)
      } catch (err) {
        setError('Error al cargar los artículos')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <div className="container-custom py-20 text-center">Cargando artículos...</div>
  }

  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
          {error}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Aún no hay artículos. Vuelve pronto.
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full md:w-48 h-48 object-cover"
                  />
                )}
                <div className="flex-grow p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.createdAt).toLocaleDateString('es-ES')}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Leer más →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
