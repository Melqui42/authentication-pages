import React, { InputHTMLAttributes, forwardRef } from 'react'

import * as C from './styled'

interface FieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string | undefined
}

const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  ({ errorMessage, ...props }, ref) => {
    return (
      <C.FieldInput
        {...props}
        ref={ref}
        style={
          !errorMessage
            ? { borderColor: '#3c3c3c' }
            : { borderColor: '#f56161' }
        }
      />
    )
  },
)

FieldInput.displayName = 'FieldInput'

export default FieldInput
