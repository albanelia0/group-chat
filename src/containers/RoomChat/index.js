import React, {useState} from 'react'

import io from 'socket.io-client';
import uuid from 'uuid/v4'

import ListChat from '../../components/ListChat'
import FormChat from '../../components/FormChat'

import './index.scss'

const baseClass = 'GC-RoomChat'
const urlSocket='http://localhost:3305'

const RoomChat = () => {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [userName, setUserName] = useState('')

  const initSocket = () => {
    const socket = io(urlSocket)
    socket.on('connect', () => {
      console.log('connected')
    })
    socket.on('message', data => {
      setMessages(messages => [...messages, data])
    })
    return socket
  }

  const [socket] = useState(initSocket)

  const onInputSubmit = e => {
    e.preventDefault()
    if (inputValue === '') return

    const newMessage = {
      name: userName,
      text: inputValue,
      color: '',
      id: uuid()
    }
    setMessages([...messages, newMessage])
    socket.emit('message', newMessage)
    setInputValue('')
  }

  const onInputChange = e => {
    const {value} = e.target
    setInputValue(value)
  }

  const onUserInserName = e => {
    const {value} = e.target
    setUserName(value)
  }

  return (
    <div className={baseClass}>
      <ListChat messages={messages}/>
      <FormChat
        userName={userName}
        onUserInserName={onUserInserName}
        onInputSubmit={onInputSubmit}
        onInputChange={onInputChange}
        inputValue={inputValue}
      />
    </div>
  )
}

export default RoomChat
