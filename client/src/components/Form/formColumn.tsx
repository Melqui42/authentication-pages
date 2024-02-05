import React from 'react'

import * as C from './styled'

interface FormColumnProps {
  children?: React.ReactNode
}

const FormColumn: React.FC<FormColumnProps> = ({ children }) => {
  return <C.FormColumn>{children}</C.FormColumn>
}

export default FormColumn
