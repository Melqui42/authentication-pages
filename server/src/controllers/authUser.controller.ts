import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

const authUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const emailExists = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    })

    const getPassword = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
      select: {
        password: true,
      },
    })

    if (
      !getPassword ||
      !bcrypt.compareSync(password, getPassword.password) ||
      !emailExists
    ) {
      return res.status(200).json({
        message: 'Usuário ou senha inválidos.',
        type: 'error',
      })
    } else {
      return res
        .status(200)
        .json({ message: 'Usuário e senha válidos.', type: 'success' })
    }
  } catch (err) {
    return res.send(400).json({ message: 'Erro ao autenticar usuário:', err })
  }
}

export default authUser
