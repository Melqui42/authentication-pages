import 'dotenv/config'

import { PrismaClient } from '@prisma/client'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import configureRoutes from './routes/router'

const prisma = new PrismaClient()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

configureRoutes(app)

const databaseConnection = async () => {
  try {
    await prisma.$connect()
    console.log('Conectado ao banco de dados!')

    app.listen(process.env.PORT, () => {
      console.log(`Servidor escutando na Porta ${process.env.PORT}.`)
    })
  } catch (error) {
    console.error('Erro ao se conectar ao Banco de Dados:', error)
  } finally {
    await prisma.$disconnect()
  }
}

databaseConnection()
