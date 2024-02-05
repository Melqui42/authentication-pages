import React, { LabelHTMLAttributes } from 'react'

import * as C from './styled'

interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode
}

const FieldLabel: React.FC<FieldLabelProps> = ({ children, ...props }) => {
  return <C.FieldLabel {...props}>{children}</C.FieldLabel>
}

export default FieldLabel
