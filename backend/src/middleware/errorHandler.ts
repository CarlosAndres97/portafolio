import { Request, Response, NextFunction } from 'express'

interface ErrorWithStatus extends Error {
  status?: number
}

export const errorHandler = (
  error: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500
  const message = error.message || 'Error interno del servidor'

  console.error(`[${status}] ${message}`)

  res.status(status).json({
    error: {
      status,
      message,
    },
  })
}

export class AppError extends Error {
  constructor(message: string, public status: number = 500) {
    super(message)
    Object.setPrototypeOf(this, AppError.prototype)
  }
}
