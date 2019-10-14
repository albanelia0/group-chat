import React from 'react'

import './index.scss'

const baseClass = 'GC-ContentFormChat'
const FormClass = `${baseClass}-form`
const inputClass = `${FormClass}-input`
const buttonClass = `${FormClass}-button`
const inputUserClass = `${FormClass}-inputUser`

const FormChat = ({
  onInputSubmit,
  onInputChange,
  inputValue,
  userName,
  onUserInserName
}) => {
  return(
    <div className={baseClass}>
      <form className={FormClass} onSubmit={onInputSubmit}>
        <input
          className={inputUserClass}
          value={userName}
          type="text"
          placeholder="Insert your name"
          onChange={onUserInserName}/>
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

export default FormChat
