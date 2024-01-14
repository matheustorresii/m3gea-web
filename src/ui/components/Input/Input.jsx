import React, { useState } from "react";
import { Main, Placeholder, Textfield } from './styles.jsx'

export default function Input({ type, hint, placeholder, value, setValue, onKeyDown }) {
  const [isFocused, setIsFocused] = useState(false)

  function focused() {
    return isFocused || (value !== '')
  }

  return (
    <Main>
      {hint != undefined && <Placeholder focused={focused().toString()}>{hint}</Placeholder>}
      <Textfield 
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}
        onKeyDown={onKeyDown}
      />
    </Main>
  )
}