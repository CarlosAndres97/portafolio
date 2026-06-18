import { useState, useEffect, useCallback, useRef } from 'react'

export interface UseAsyncResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useAsync<T>(
  asyncFn: () => Promise<T>,
  dependencies: ReadonlyArray<unknown> = []
): UseAsyncResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const isMountedRef = useRef<boolean>(true)
  const fnRef = useRef(asyncFn)
  fnRef.current = asyncFn

  const execute = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fnRef.current()
      if (isMountedRef.current) {
        setData(result)
      }
    } catch (err) {
      if (isMountedRef.current) {
        const message =
          err instanceof Error ? err.message : 'Error desconocido'
        setError(message)
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    isMountedRef.current = true
    execute()
    return () => {
      isMountedRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return { data, loading, error, refetch: execute }
}
