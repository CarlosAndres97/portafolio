import { useCallback } from 'react'
import { useAsync } from './useAsync'
import { projectService } from '../services/projectService'
import { Project } from '../types'

export function useProjects() {
  const fetcher = useCallback(() => projectService.getAll(), [])
  const result = useAsync<Project[]>(fetcher, [])

  return {
    projects: result.data ?? [],
    loading: result.loading,
    error: result.error,
    refetch: result.refetch,
  }
}

export function useFeaturedProjects(limit: number = 3) {
  const fetcher = useCallback(async () => {
    const all = await projectService.getAll()
    return all.slice(0, limit)
  }, [limit])
  const result = useAsync<Project[]>(fetcher, [limit])

  return {
    projects: result.data ?? [],
    loading: result.loading,
    error: result.error,
    refetch: result.refetch,
  }
}

export function useProject(id: string | undefined) {
  const fetcher = useCallback(() => {
    if (!id) throw new Error('ID requerido')
    return projectService.getById(id)
  }, [id])
  const result = useAsync<Project>(fetcher, [id])

  return {
    project: result.data,
    loading: result.loading,
    error: result.error,
    refetch: result.refetch,
  }
}
