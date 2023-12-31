import React, { useState } from "react";
import { Main, Placeholder, Textfield } from './styles.jsx'

export default function Input({ type, hint, value, setValue }) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Main>
      <Placeholder focused={isFocused || (value != '')}>{hint}</Placeholder>
      <Textfield 
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}
      />
    </Main>
  )
}