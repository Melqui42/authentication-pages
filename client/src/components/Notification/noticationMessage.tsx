import React from 'react'

import * as C from './styled'

interface NoticationMessageProps {
  children?: React.ReactNode
}

const NoticationMessage: React.FC<NoticationMessageProps> = ({
  children,
  ...props
}) => {
  return <C.NoticationMessage {...props}>{children}</C.NoticationMessage>
}

export default NoticationMessage
