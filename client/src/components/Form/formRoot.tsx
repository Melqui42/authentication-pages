import React, { FormHTMLAttributes } from 'react'

import * as C from './styled'

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode
}

const FormRoot: React.FC<FormRootProps> = ({ children, ...props }) => {
  return <C.FormRoot {...props}>{children}</C.FormRoot>
}

export default FormRoot
