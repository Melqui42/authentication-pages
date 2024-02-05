import express from 'express'

import authUserRouter from './authUser.router'
import createUserRouter from './createUser.router'

const configureRoutes = (app: express.Express) => {
  app.use(createUserRouter)
  app.use(authUserRouter)
}

export default configureRoutes
