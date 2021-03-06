import React from 'react'

import './index.scss'

const baseClass = 'gc-ChatList'
const contentListMessages = `${baseClass}-ul`
const listMessages = `${contentListMessages}-li`

const ChatList = ({messages}) => {
  return (
    <div className={baseClass}>
      <ul className={contentListMessages}>
        {messages.map(message => {
          return (
            <li
              className={listMessages}
              key={message.id}
            >{message.name}: {message.text}</li>
            )
          })}
      </ul>
    </div>
  )
}

export default ChatList
