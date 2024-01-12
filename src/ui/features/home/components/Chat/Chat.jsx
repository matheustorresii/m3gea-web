import React, { useRef, useState } from "react";
import { FaPaperPlane } from 'react-icons/fa6'
import Input from '../../../../components/input'
import Separator from '../../../../components/separator'
import * as Loading from '../../../../components/loading'
import * as S from './styles'
import App from './../../../../../App'

export default function Chat() {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  function didSendMessage() {
    setLoading(true)
  }

  return (
    <S.Main>
      {loading && <Loading.Container/>}

      <S.ChatContainer>
        <S.MessageContainer>
          <Separator size={16}/>
          <S.MessageTitle>System</S.MessageTitle>
          <Separator size={4}/>
          <S.MessageContent>Pra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor maneroPra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor maneroPra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor maneroPra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor maneroPra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor manero</S.MessageContent>
          <Separator size={16}/>
          <S.MessageSeparator/>
        </S.MessageContainer>
      </S.ChatContainer>

      <S.InputContainer>
        <Input type="text" placeholder="Message" value={text} setValue={setText}/>
        <S.InputButton onClick={didSendMessage} >
          <FaPaperPlane color="#475E6B"/>
        </S.InputButton>
      </S.InputContainer>
    </S.Main>
  )
}