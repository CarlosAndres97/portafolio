import { Router } from 'express'
import * as blogController from '../controllers/blogController'

const router = Router()

router.get('/', blogController.getBlogPosts)
router.get('/:slug', blogController.getBlogPostBySlug)
router.post('/', blogController.createBlogPost)
router.delete('/:id', blogController.deleteBlogPost)

export default router
