import React from 'react'

import * as C from './styled'

interface FormContentProps {
  children?: React.ReactNode
}

const FormContent: React.FC<FormContentProps> = ({ children }) => {
  return <C.FormContent>{children}</C.FormContent>
}

export default FormContent
