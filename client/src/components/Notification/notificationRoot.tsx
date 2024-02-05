import React, { HTMLAttributes } from 'react'

import Icon from 'utils/IconImport'

import * as C from './styled'

interface NotificationRootProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  notification?: boolean
  status?: string
}

const NotificationRoot: React.FC<NotificationRootProps> = ({
  children,
  notification,
  status,
  ...props
}) => {
  return (
    <C.NotificationRoot {...props} className={!notification ? 'hide' : 'show'}>
      {status === 'success' ? (
        <Icon.Fa.FaCheck
          style={{ backgroundColor: '#61F594', color: '#313131' }}
          className="icon"
        />
      ) : (
        <Icon.Io5.IoAlert
          style={{ backgroundColor: '#f56161', color: '#ffffff' }}
          className="icon"
        />
      )}
      {children}
    </C.NotificationRoot>
  )
}

export default NotificationRoot
