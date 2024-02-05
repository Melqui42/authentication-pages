import React from 'react'

import * as C from './styled'

interface FieldErrorMessageProps {
  children?: React.ReactNode
}

const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({ children }) => {
  return <C.FieldErrorMessage>{children}</C.FieldErrorMessage>
}

export default FieldErrorMessage
