import mongoose, { Schema, Document } from 'mongoose'

export interface IProject extends Document {
  title: string
  description: string
  image: string
  technologies: string[]
  link?: string
  github?: string
  createdAt: Date
  updatedAt: Date
}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    technologies: [
      {
        type: String,
      },
    ],
    link: String,
    github: String,
  },
  { timestamps: true }
)

export default mongoose.model<IProject>('Project', projectSchema)
