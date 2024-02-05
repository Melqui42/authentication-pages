import React, { ButtonHTMLAttributes } from 'react'

import Icon from 'utils/IconImport'

import * as C from './styled'

interface FieldActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secure?: boolean
}

const FieldAction: React.FC<FieldActionProps> = ({ secure, ...props }) => {
  return (
    <C.FieldAction {...props} type="button">
      {secure ? (
        <Icon.Bs.BsEyeSlash className="iconAction" />
      ) : (
        <Icon.Bs.BsEye className="iconAction" />
      )}
    </C.FieldAction>
  )
}

export default FieldAction
