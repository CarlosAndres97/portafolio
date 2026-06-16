import { Request, Response } from 'express'
import BlogPost, { IBlogPost } from '../models/BlogPost'
import { AppError } from '../middleware/errorHandler'

export const getBlogPosts = async (req: Request, res: Response) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 })
    res.json(posts)
  } catch (error) {
    throw new AppError('Error al obtener artículos', 500)
  }
}

export const getBlogPostBySlug = async (req: Request, res: Response) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug })
    if (!post) {
      throw new AppError('Artículo no encontrado', 404)
    }
    res.json(post)
  } catch (error) {
    throw new AppError('Error al obtener el artículo', 500)
  }
}

export const createBlogPost = async (req: Request, res: Response) => {
  try {
    const { title, slug, content, excerpt, image, tags } = req.body

    if (!title || !slug || !content || !excerpt) {
      throw new AppError('Faltan campos requeridos', 400)
    }

    const post: IBlogPost = new BlogPost({
      title,
      slug,
      content,
      excerpt,
      image,
      tags: tags || [],
    })

    await post.save()
    res.status(201).json(post)
  } catch (error) {
    throw new AppError('Error al crear artículo', 500)
  }
}

export const deleteBlogPost = async (req: Request, res: Response) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id)
    if (!post) {
      throw new AppError('Artículo no encontrado', 404)
    }
    res.json({ message: 'Artículo eliminado' })
  } catch (error) {
    throw new AppError('Error al eliminar artículo', 500)
  }
}
