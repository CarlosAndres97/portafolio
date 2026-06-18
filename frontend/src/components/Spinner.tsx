export const Spinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div
        className={`${sizes[size]} border-primary-200 dark:border-primary-900 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin`}
        role="status"
        aria-label="Cargando"
      />
    </div>
  )
}

export default Spinner
