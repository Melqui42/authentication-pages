import React, { ButtonHTMLAttributes } from 'react'

import Icon from 'utils/IconImport'

import * as C from './styled'

type NotificationActionProps = ButtonHTMLAttributes<HTMLButtonElement>

const NotificationAction: React.FC<NotificationActionProps> = ({
  ...props
}) => {
  return (
    <C.NotificationAction {...props} type="button">
      <Icon.Md.MdClose className="iconAction" />
    </C.NotificationAction>
  )
}

export default NotificationAction
