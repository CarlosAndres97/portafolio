import { Request, Response } from 'express'
import ContactMessage from '../models/ContactMessage'
import { AppError } from '../middleware/errorHandler'
import nodemailer from 'nodemailer'

export const sendContactMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      throw new AppError('Faltan campos requeridos', 400)
    }

    // Guardar en BD
    const contactMessage = new ContactMessage({
      name,
      email,
      message,
    })

    await contactMessage.save()

    // Enviar email (opcional)
    try {
      await sendEmailNotification(name, email, message)
    } catch (emailError) {
      console.error('Error al enviar email:', emailError)
      // No fallar si el email falla, el mensaje ya está guardado
    }

    res.status(201).json({
      success: true,
      message: 'Mensaje recibido. Te responderé pronto.',
    })
  } catch (error) {
    throw new AppError('Error al procesar tu mensaje', 500)
  }
}

const sendEmailNotification = async (
  name: string,
  email: string,
  message: string
) => {
  // Configura según tus credenciales (actualmente deshabilitado para desarrollo)
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  // })

  // const mailOptions = {
  //   from: process.env.EMAIL_FROM,
  //   to: process.env.ADMIN_EMAIL,
  //   subject: `Nuevo mensaje de contacto de ${name}`,
  //   html: `
  //     <h2>Nuevo mensaje de contacto</h2>
  //     <p><strong>Nombre:</strong> ${name}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Mensaje:</strong></p>
  //     <p>${message.replace(/\n/g, '<br>')}</p>
  //   `,
  // }

  // await transporter.sendMail(mailOptions)
}
