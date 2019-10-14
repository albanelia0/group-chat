import React from 'react'

import './index.scss'

const baseClass = 'gc-ContentChatForm'
const formClass = `${baseClass}-form`
const inputClass = `${formClass}-input`
const buttonClass = `${formClass}-button`
const userInputClass = `${formClass}-userInput`

const ChatForm = ({
  onInputSubmit,
  onInputChange,
  inputValue,
  userName,
  onUserNameChange
}) => {
  return(
    <div className={baseClass}>
      <form className={formClass} onSubmit={onInputSubmit}>
        <input
          className={userInputClass}
          value={userName}
          type="text"
          placeholder="Insert your name"
          onChange={onUserNameChange}/>
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
