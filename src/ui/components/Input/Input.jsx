import React, { useState } from "react";
import { Main, Placeholder, Textfield } from './styles.jsx'

export default function Input({ type, hint, placeholder, value, setValue }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Main>
      {hint != undefined && <Placeholder focused={isFocused || (value !== '')}>{hint}</Placeholder>}
      <Textfield 
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}
      />
    </Main>
  )
}