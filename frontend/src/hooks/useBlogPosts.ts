import { useCallback } from 'react'
import { useAsync } from './useAsync'
import { blogService } from '../services/blogService'
import { BlogPost } from '../types'

export function useBlogPosts() {
  const fetcher = useCallback(() => blogService.getAll(), [])
  const result = useAsync<BlogPost[]>(fetcher, [])

  return {
    posts: result.data ?? [],
    loading: result.loading,
    error: result.error,
    refetch: result.refetch,
  }
}

export function useBlogPostBySlug(slug: string | undefined) {
  const fetcher = useCallback(() => {
    if (!slug) throw new Error('Slug requerido')
    return blogService.getBySlug(slug)
  }, [slug])
  const result = useAsync<BlogPost>(fetcher, [slug])

  return {
    post: result.data,
    loading: result.loading,
    error: result.error,
    refetch: result.refetch,
  }
}
