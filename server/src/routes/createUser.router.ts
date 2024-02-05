import express from 'express'

import {
  createUser,
  checkEmailExists,
} from '../controllers/createUser.controller'

const router = express.Router()

router.post('/signUp', createUser)
router.get('/signUp', checkEmailExists)

export default router
