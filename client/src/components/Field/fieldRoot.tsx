import React from 'react'

import * as C from './styled'

interface FieldRootProps {
  children?: React.ReactNode
  icon?: React.ElementType
}

const FieldRoot: React.FC<FieldRootProps> = ({ children, icon: Icon }) => {
  return (
    <C.FieldRoot>
      {children}
      {Icon && <Icon className="icon" />}
    </C.FieldRoot>
  )
}

export default FieldRoot
