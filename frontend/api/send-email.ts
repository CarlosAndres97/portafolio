import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

interface ContactBody {
  name?: string
  email?: string
  message?: string
}

const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, error: 'Método no permitido' })
  }

  const { name, email, message } = (req.body ?? {}) as ContactBody

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: 'Faltan campos requeridos' })
  }

  if (!isEmail(email)) {
    return res
      .status(400)
      .json({ success: false, error: 'Email inválido' })
  }

  const mailerService = process.env.MAILER_SERVICE
  const mailerEmail = process.env.MAILER_EMAIL
  const mailerSecret = process.env.MAILER_SECRET_KEY
  const adminEmail = process.env.ADMIN_EMAIL ?? mailerEmail

  if (!mailerService || !mailerEmail || !mailerSecret || !adminEmail) {
    console.error('Faltan variables de entorno para el envío de email')
    return res
      .status(500)
      .json({ success: false, error: 'Configuración de email incompleta' })
  }

  const transporter = nodemailer.createTransport({
    service: mailerService,
    auth: {
      user: mailerEmail,
      pass: mailerSecret,
    },
  })

  try {
    await transporter.sendMail({
      from: `Portfolio <${mailerEmail}>`,
      to: adminEmail,
      replyTo: email,
      subject: `Portfolio: mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h3>Nuevo mensaje desde el portafolio</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p style="white-space: pre-line">${message}</p>
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Mensaje enviado correctamente',
    })
  } catch (error) {
    console.error('Error enviando email:', error)
    return res
      .status(500)
      .json({ success: false, error: 'Error al enviar el mensaje' })
  }
}
