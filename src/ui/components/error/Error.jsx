import React, { useEffect, useState } from "react";
import { FaTriangleExclamation } from 'react-icons/fa6'
import * as S from './styles.jsx'

export default function Error({message}) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const changeOpacity = async () => {
      setOpacity(1)
      setTimeout(()=>{
        setOpacity(0)
      }, 3000)
    }
    changeOpacity()
  }, [opacity])

  return (
    <S.Main style={{opacity: opacity}}>
      <FaTriangleExclamation color="white" style={{width: 40, height: 40}}/>
      <S.Message>{message}</S.Message>
    </S.Main>
  )
}