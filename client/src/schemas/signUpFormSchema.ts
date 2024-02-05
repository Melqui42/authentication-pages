import * as yup from 'yup'

import axios from 'axios'

const signUpFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'First name is too short')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(3, 'Last name is too short')
    .required('Last name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required')
    .test({
      name: 'uniqueEmail',
      message: 'Email already exists',
      test: async function (value) {
        try {
          const response = await axios.get('/signUp', {
            params: { email: value },
          })

          return response.data.isUnique
        } catch {
          return false
        }
      },
    }),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm password is required'),
})

export default signUpFormSchema
