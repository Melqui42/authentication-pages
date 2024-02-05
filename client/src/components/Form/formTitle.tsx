import React from 'react'

import * as C from './styled'

interface FormTitleProps {
  children?: React.ReactNode
}

const FormTitle: React.FC<FormTitleProps> = ({ children }) => {
  return <C.FormTitle>{children}</C.FormTitle>
}

export default FormTitle
