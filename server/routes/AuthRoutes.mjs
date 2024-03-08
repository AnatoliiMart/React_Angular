import express from 'express'
import AuthContoller from '../controllers/AuthContoller.mjs'
import auth from '../middleware/auth.mjs'
const router = express.Router()

router.post('/register', AuthContoller.register)
router.post('/login', AuthContoller.login)
router.get('/auth-user', auth, AuthContoller.getAuthUser)

export default router
