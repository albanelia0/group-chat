import React from 'react'

import './index.scss'

const baseClass = 'GC-ContentFormChat'
const FormClass = `${baseClass}-form`
const inputClass = `${baseClass}-input`
const buttonClass = `${baseClass}-button`

const FormChat = ({ onInputSubmit, onInputChange, inputValue  }) => {
  return(
    <div className={baseClass}>
      <form className={FormClass} onSubmit={onInputSubmit}>
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
