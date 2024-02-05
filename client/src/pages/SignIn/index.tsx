import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import axios from 'axios'

import Field from 'components/Field'
import Form from 'components/Form'
import Notification from 'components/Notification'

import signInFormSchema from 'schemas/signInFormSchema'

import Icon from 'utils/IconImport'

interface SingInFormValues {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SingInFormValues>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [status, setStatus] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [security, setSecurity] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState<boolean>(false)

  const [showNotification, setShowNotification] = useState(false)

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SingInFormValues> = async (formData) => {
    try {
      reset()
      const request = await axios.post('http://localhost:8080/signIn', formData)
      setMessage(request.data.message)
      setStatus(request.data.type)

      setShowNotification(false)

      setTimeout(() => {
        setShowNotification(true)
        setTimeout(() => {
          setShowNotification(false)
        }, 3000)
      }, 0)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Notification.Root status={status} notification={showNotification}>
        <Notification.Message>{message}</Notification.Message>
      </Notification.Root>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.Title>Hello.</Form.Title>
        <Form.Description>Welcome Back.</Form.Description>
        <Form.Content>
          <Field.Root icon={Icon.Md.MdEmail}>
            <Field.Label htmlFor="email">E-mail</Field.Label>
            <Field.Input
              {...register('email')}
              placeholder="Email address"
              errorMessage={errors.email?.message}
            />
            {errors.email && (
              <Field.ErrorMessage>{errors.email?.message}</Field.ErrorMessage>
            )}
          </Field.Root>
          <Field.Root icon={Icon.Fa.FaLock}>
            <Field.Label htmlFor="password">Password</Field.Label>
            <Field.Input
              {...register('password')}
              type={security ? 'text' : 'password'}
              placeholder="Password"
              errorMessage={errors.password?.message}
            />
            <Field.Action
              secure={security}
              onClick={() => setSecurity(!security)}
            />
            {errors.password && (
              <Field.ErrorMessage>
                {errors.password?.message}
              </Field.ErrorMessage>
            )}
          </Field.Root>
          <Form.Column>
            <Form.CheckBox
              toggle={rememberMe}
              onClick={() => setRememberMe(!rememberMe)}
            >
              Remember Me
            </Form.CheckBox>
            <Form.Link>Forgot Password?</Form.Link>
          </Form.Column>
          <Form.Action type="submit">Login In</Form.Action>
          <Form.Link onClick={() => navigate('/signup')}>
            Don&apos;t have an account? <span>Create an account</span> .
          </Form.Link>
        </Form.Content>
      </Form.Root>
    </>
  )
}

export default SignIn
