import React from 'react'

import './index.scss'

const baseClass = 'GC-ListChat'
const listMessages = `${baseClass}-ul`

const ListChat = ({messages}) => {
  return (
    <div className={baseClass}>
      <ul className={listMessages}>
        {messages.map(message => {
          return (
              <li key={message.id}>{message.name}:  {message.text}</li>
              )
          })}
      </ul>
    </div>
  )
}

export default ListChat
