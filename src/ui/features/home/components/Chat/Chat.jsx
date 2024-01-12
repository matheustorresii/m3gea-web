import React, { useState } from "react";
import { FaPaperPlane } from 'react-icons/fa6'
import Input from '../../../../components/input'
import Separator from '../../../../components/separator'
import * as S from './styles'

export default function Chat() {
  const [message, setMessage] = useState('')

  const test = [1,2,3,4,5,6,7,8,9,10]

  function didSendMessage() {

  }

  return (
    <S.Main>
      <S.ChatContainer>

        {test.map(e => (
          <>
            <S.MessageContainer>
              <S.MessageTitle>Torreta Corporation</S.MessageTitle>
              <Separator size={4}/>
              <S.MessageContent>Como que eu faço um balão em formato de cachorro?</S.MessageContent>
              <Separator size={16}/>
              <S.MessageSeparator/>
              <Separator size={16}/>
            </S.MessageContainer>

            <S.MessageContainer>
              <S.MessageTitle>System</S.MessageTitle>
              <Separator size={4}/>
              <S.MessageContent>Pra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor maneroPra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor maneroPra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor maneroPra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor maneroPra fazer um balão de cachorro é só você pi pi pi pi po po po po pi pi pi e um texto muito grande aqui ta ligado só pra testar se ele ta quebrando a linha mesmo porque o layout pode quebrar e pipi pi pi pi pop o popo um texto GIGANTESCO aqui ficaria manero hahahaha piadas humnor manero</S.MessageContent>
              <Separator size={16}/>
              <S.MessageSeparator/>
              <Separator size={16}/>
            </S.MessageContainer>
          </>
        ))}

      </S.ChatContainer>

      <S.InputContainer>
        <Input type="text" placeholder="Message" value={message} setValue={setMessage}/>
        <S.InputButton>
          <FaPaperPlane onClick={didSendMessage} color="#475E6B"/>
        </S.InputButton>
      </S.InputContainer>
    </S.Main>
  )
}