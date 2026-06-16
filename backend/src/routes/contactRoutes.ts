import { Router } from 'express'
import * as contactController from '../controllers/contactController'

const router = Router()

router.post('/', contactController.sendContactMessage)

export default router
