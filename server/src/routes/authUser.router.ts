import express from 'express'

import authUser from '../controllers/authUser.controller'

const router = express.Router()

router.post('/signIn', authUser)

export default router
