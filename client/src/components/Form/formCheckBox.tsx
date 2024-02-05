import React, { ButtonHTMLAttributes } from 'react'

import Icon from 'utils/IconImport'

import * as C from './styled'

interface FormCheckBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  toggle?: boolean
}

const FormCheckBox: React.FC<FormCheckBoxProps> = ({
  children,
  toggle,
  ...props
}) => {
  return (
    <>
      <C.FormCheckBox {...props} type="button">
        <div
          style={
            toggle ? { backgroundColor: '#1a77e4' } : { borderColor: '#ffffff' }
          }
        >
          {toggle ? <Icon.Fa.FaCheck className="icon" /> : ''}
        </div>
        <p>{children}</p>
      </C.FormCheckBox>
    </>
  )
}

export default FormCheckBox
