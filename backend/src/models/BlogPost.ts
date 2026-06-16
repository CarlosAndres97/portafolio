import mongoose, { Schema, Document } from 'mongoose'

export interface IBlogPost extends Document {
  title: string
  slug: string
  content: string
  excerpt: string
  image: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

const blogPostSchema = new Schema<IBlogPost>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    image: String,
    tags: [String],
  },
  { timestamps: true }
)

export default mongoose.model<IBlogPost>('BlogPost', blogPostSchema)
