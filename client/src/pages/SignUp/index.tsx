import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import axios from 'axios'

import Field from 'components/Field'
import Form from 'components/Form'
import Notification from 'components/Notification'

import signUpFormSchema from 'schemas/signUpFormSchema'

import Icon from 'utils/IconImport'

interface CreateAccountFormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateAccountFormValues>({
    resolver: yupResolver(signUpFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const [status, setStatus] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [security, setSecurity] = useState<boolean[]>([false, false])
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false)

  const [showNotification, setShowNotification] = useState(false)

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<CreateAccountFormValues> = async (formData) => {
    try {
      reset()
      const request = await axios.post('http://localhost:8080/signUp', formData)
      setMessage(request.data.message)
      setStatus(request.data.type)

      setShowNotification(false)

      setTimeout(() => {
        setShowNotification(true)
        setTimeout(() => {
          setShowNotification(false)
        }, 3000)
      }, 0)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Notification.Root status={status} notification={showNotification}>
        <Notification.Message>{message}</Notification.Message>
      </Notification.Root>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.Title>Create new account.</Form.Title>
        <Form.Description>
          Create your account on our platform and take advantage of our
          services.
        </Form.Description>
        <Form.Content>
          <Form.Column>
            <Field.Root icon={Icon.Fa.FaUser}>
              <Field.Label htmlFor="firstName">First Name</Field.Label>
              <Field.Input
                {...register('firstName')}
                placeholder="Enter your first name"
                errorMessage={errors.firstName?.message}
              />
              {errors.firstName && (
                <Field.ErrorMessage>
                  {errors.firstName?.message}
                </Field.ErrorMessage>
              )}
            </Field.Root>
            <Field.Root icon={Icon.Fa.FaUser}>
              <Field.Label htmlFor="lastName">Last Name</Field.Label>
              <Field.Input
                {...register('lastName')}
                placeholder="Enter your last name"
                errorMessage={errors.lastName?.message}
              />
              {errors.lastName && (
                <Field.ErrorMessage>
                  {errors.lastName?.message}
                </Field.ErrorMessage>
              )}
            </Field.Root>
          </Form.Column>
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
              type={security[0] ? 'text' : 'password'}
              placeholder="Password"
              errorMessage={errors.password?.message}
            />
            <Field.Action
              secure={security[0]}
              onClick={() =>
                setSecurity((prevState) => [!prevState[0], prevState[1]])
              }
            />
            {errors.password && (
              <Field.ErrorMessage>
                {errors.password?.message}
              </Field.ErrorMessage>
            )}
          </Field.Root>
          <Field.Root icon={Icon.Fa.FaLock}>
            <Field.Label htmlFor="confirm-password">
              Confirm password
            </Field.Label>
            <Field.Input
              {...register('confirmPassword')}
              type={security[1] ? 'text' : 'password'}
              placeholder="Confirm password"
              errorMessage={errors.confirmPassword?.message}
            />
            <Field.Action
              secure={security[1]}
              onClick={() =>
                setSecurity((prevState) => [prevState[0], !prevState[1]])
              }
            />
            {errors.confirmPassword && (
              <Field.ErrorMessage>
                {errors.confirmPassword?.message}
              </Field.ErrorMessage>
            )}
          </Field.Root>
          <Form.Column>
            <Form.CheckBox
              toggle={acceptTerms}
              onClick={() => setAcceptTerms(!acceptTerms)}
            >
              I accept the <span>Terms of Services</span>.
            </Form.CheckBox>
          </Form.Column>
          <Form.Action
            type={!acceptTerms ? 'button' : 'submit'}
            style={
              !acceptTerms
                ? { opacity: '0.5', cursor: 'no-drop' }
                : { opacity: '1' }
            }
          >
            Continue
          </Form.Action>
          <Form.Link onClick={() => navigate('/')}>
            You already have an account? <span>Login to my account</span>.
          </Form.Link>
        </Form.Content>
      </Form.Root>
    </>
  )
}

export default SignUp
