import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/database'
import { errorHandler, AppError } from './middleware/errorHandler'
import projectRoutes from './routes/projectRoutes'
import blogRoutes from './routes/blogRoutes'
import contactRoutes from './routes/contactRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Conectar BD
connectDB()

// Rutas
app.use('/api/projects', projectRoutes)
app.use('/api/blog', blogRoutes)
app.use('/api/contact', contactRoutes)

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Servidor funcionando correctamente' })
})

// 404 Handler
app.use((req: Request, _res: Response, next: NextFunction) => {
  next(new AppError(`Ruta no encontrada: ${req.path}`, 404))
})

// Error Handler
app.use(errorHandler)

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✓ Servidor ejecutándose en puerto ${PORT}`)
  console.log(`✓ Frontend esperado en: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`)
})
