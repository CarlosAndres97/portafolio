import { Request, Response, NextFunction } from 'express'
import ContactMessage from '../models/ContactMessage'
import { AppError } from '../middleware/errorHandler'

export const sendContactMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return next(new AppError('Faltan campos requeridos', 400))
    }

    const contactMessage = new ContactMessage({
      name,
      email,
      message,
    })

    await contactMessage.save()

    res.status(201).json({
      success: true,
      message: 'Mensaje recibido. Te responderé pronto.',
    })
  } catch (error) {
    next(new AppError('Error al procesar tu mensaje', 500))
  }
}
