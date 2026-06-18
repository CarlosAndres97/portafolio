import { Component, ErrorInfo, ReactNode } from 'react'
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null })
  }

  handleReload = (): void => {
    window.location.reload()
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-md w-full glass-card p-8 text-center">
            <div className="inline-flex w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/50 items-center justify-center mb-6">
              <FiAlertTriangle size={28} className="text-red-600 dark:text-red-400" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-3">
              Algo salió mal
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
            </p>
            {this.state.error && (
              <pre className="text-left text-xs bg-gray-100 dark:bg-gray-900 p-3 rounded-lg overflow-auto mb-6 max-h-32">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex gap-3 justify-center">
              <button onClick={this.handleReset} className="btn-secondary">
                <FiRefreshCw size={16} />
                Reintentar
              </button>
              <button onClick={this.handleReload} className="btn-primary">
                Recargar página
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
