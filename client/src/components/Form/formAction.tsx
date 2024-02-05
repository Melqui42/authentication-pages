import React, { ButtonHTMLAttributes } from 'react'

import * as C from './styled'

interface FormActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const FormAction: React.FC<FormActionProps> = ({ children, ...props }) => {
  return <C.FormAction {...props}>{children}</C.FormAction>
}

export default FormAction
