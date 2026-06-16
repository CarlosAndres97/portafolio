import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BlogPost } from '../types'
import { blogService } from '../services/blogService'
import { Link } from 'react-router-dom'

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return
      try {
        const data = await blogService.getBySlug(slug)
        setPost(data)
      } catch (err) {
        setError('Error al cargar el artículo')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return <div className="container-custom py-20 text-center">Cargando artículo...</div>
  }

  if (error || !post) {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-red-600 mb-4">{error || 'Artículo no encontrado'}</p>
        <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
          Volver al blog
        </Link>
      </div>
    )
  }

  return (
    <article className="container-custom py-20 max-w-3xl">
      <Link to="/blog" className="text-primary-600 hover:text-primary-700 mb-8 inline-block">
        ← Volver al blog
      </Link>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      )}

      <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-300 dark:border-gray-700">
        <span className="text-gray-500 dark:text-gray-400">
          {new Date(post.createdAt).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
