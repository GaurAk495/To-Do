import express from 'express'
import { login, signup } from '../controller/authController.js'
import verifyToken from '../validations/tokenValidation.js'

const authRouter = express.Router()

authRouter.get('/', verifyToken, (req, res) => {
    res.status(200).json({ success: true, message: 'user is Valid' })
})
authRouter.post('/login', login)
authRouter.post('/signup', signup)

export default authRouter