import React, {useState} from 'react'

import ListChat from '../../components/ListChat'
import FormChat from '../../components/FormChat'

import './index.scss'

const baseClass = 'GC-RoomChat'

const RoomChat = () => {

  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')

  const onInputSubmit = e => {
    e.preventDefault()
    if (inputValue !== '') {
      const newMessage = {
        name: 'Alba',
        text: inputValue,
        id: messages.length
      }
      setMessages([...messages, newMessage])
      setInputValue('')
    }
  }

  const onInputChange = e => {
    const {value} = e.target
    setInputValue(value)
  }

  return (
    <div className={baseClass}>
      <ListChat messages={messages}/>
      <FormChat
        onInputSubmit={onInputSubmit}
        onInputChange={onInputChange}
        inputValue={inputValue}
      />
    </div>
  )
}

export default RoomChat
