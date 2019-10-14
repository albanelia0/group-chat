import React, {useState, useEffect} from 'react'

import io from 'socket.io-client';
import uuid from 'uuid/v4'

import ChatList from '../../components/ChatList'
import ChatForm from '../../components/ChatForm'

import './index.scss'

const baseClass = 'GC-ChatRoom'

const initSocket = () => {
  const urlSocket = 'http://localhost:3305'
  return io(urlSocket)
}

const ChatRoom = () => {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [userName, setUserName] = useState('')
  const [socket] = useState(initSocket)

  useEffect(() => {
    const connectHandler = () => {
      console.log('connected')
    }
    const messageHandler = data => {
      setMessages([...messages, data])
    }

    // listen to server events
    socket.on('connect', connectHandler)
    socket.on('message', messageHandler)

    return () => {
      // remove listeners
      socket.off('connect', connectHandler)
      socket.off('message', messageHandler)
    }
  }, [socket, messages])

  const onInputSubmit = e => {
    e.preventDefault()
    if (inputValue === '') return

    const newMessage = {
      name: userName,
      text: inputValue,
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

  const onUserInsertName = e => {
    const {value} = e.target
    setUserName(value)
  }

  return (
    <div className={baseClass}>
      <ChatList messages={messages}/>
      <ChatForm
        userName={userName}
        onUserInsertName={onUserInsertName}
        onInputSubmit={onInputSubmit}
        onInputChange={onInputChange}
        inputValue={inputValue}
      />
    </div>
  )
}

export default ChatRoom
