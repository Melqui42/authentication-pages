import React from 'react'

import * as C from './styled'

interface FormDescriptionProps {
  children?: React.ReactNode
}

const FormDescription: React.FC<FormDescriptionProps> = ({ children }) => {
  return <C.FormDescription>{children}</C.FormDescription>
}

export default FormDescription
