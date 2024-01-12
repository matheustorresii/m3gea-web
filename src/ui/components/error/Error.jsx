import React, { useState } from "react";
import { FaTriangleExclamation } from 'react-icons/fa6'
import * as S from './styles.jsx'

export default function Error({message}) {
  return (
    <S.Main>
      <FaTriangleExclamation color="white" style={{width: 40, height: 40}}/>
      <S.Message>{message}</S.Message>
    </S.Main>
  )
}