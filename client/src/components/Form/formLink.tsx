import React, { AnchorHTMLAttributes } from 'react'

import * as C from './styled'

interface FormLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
}

const FormLink: React.FC<FormLinkProps> = ({ children, ...props }) => {
  return <C.FormLink {...props}>{children}</C.FormLink>
}

export default FormLink
