import React from 'react'

import './index.scss'

const baseClass = 'GC-ContentChatForm'
const FormClass = `${baseClass}-form`
const inputClass = `${FormClass}-input`
const buttonClass = `${FormClass}-button`
const userInputClass = `${FormClass}-userInput`

const ChatForm = ({
  onInputSubmit,
  onInputChange,
  inputValue,
  userName,
  onUserInsertName
}) => {
  return(
    <div className={baseClass}>
      <form className={FormClass} onSubmit={onInputSubmit}>
        <input
          className={userInputClass}
          value={userName}
          type="text"
          placeholder="Insert your name"
          onChange={onUserInsertName}/>
        <input
          className={inputClass}
          value={inputValue}
          type="text"
          placeholder="Send a message"
          onChange={onInputChange}
        />
        <button
          className={buttonClass}
          type="submit"
        >Send</button>
      </form>
    </div>
  )

}

export default ChatForm
