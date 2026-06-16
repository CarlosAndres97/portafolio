import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portafolio'
    
    await mongoose.connect(mongoUri)
    console.log('✓ MongoDB conectado exitosamente')
    
    return true
  } catch (error) {
    console.error('✗ Error al conectar MongoDB:', error)
    process.exit(1)
  }
}

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect()
    console.log('✓ MongoDB desconectado')
  } catch (error) {
    console.error('✗ Error al desconectar MongoDB:', error)
  }
}
