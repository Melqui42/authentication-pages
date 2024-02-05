import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body

    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === ''
    ) {
      return res.status(200).json({
        message: 'Nenhum campo pode estar vazio',
        type: 'error',
      })
    }

    if (!firstName || !lastName || !email || !password) {
      return res.status(200).json({
        message: 'Todos os campos são obrigatórios.',
        type: 'error',
      })
    }

    const emailExists = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (emailExists) {
      return res
        .status(200)
        .json({ message: 'Email já existe.', type: 'error', isUnique: true })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        firstname: firstName,
        lastname: lastName,
        email,
        password: hashPassword,
      },
    })

    return res
      .status(201)
      .json({ message: 'Novo usuário criado:', type: 'error' })
  } catch (err) {
    return res.send(400).json({ message: 'Erro ao criar usuário:', err })
  }
}

export const checkEmailExists = async (req: Request, res: Response) => {
  try {
    const { email } = req.query

    if (!email || typeof email !== 'string') {
      return 's'
    }

    const emailExists = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    })

    return res.json({ isUnique: !emailExists })
  } catch (error) {
    console.error('Error checking email existence:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
module.exports = {
  createUser,
  checkEmailExists,
}
