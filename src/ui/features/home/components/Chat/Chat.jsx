import React, { useContext, useState, useEffect, useRef } from "react";
import { FaPaperPlane } from 'react-icons/fa6'
import Input from '../../../../components/input'
import Separator from '../../../../components/separator'
import * as Loading from '../../../../components/loading'
import * as S from './styles'
import { postData } from '../../../../../domain/service/service'
import { ToastContext } from '../../../../../App'

export default function Chat({ token, messages, setMessages, selectedChat }) {
  const { showErrorToast } = useContext(ToastContext)
  const endOfChatRef = useRef(null)
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: 'smooth'})
  }, [messages])

  function didSendMessage() {
    if (loading) return
    setText('')
    setLoading(true)
    postMessage()
  }

  function postMessage() {
    const request = async () => {
      try {
        const result = await postData('chat', 
          {
            'content': text,
            'chatroom_id': selectedChat
          },
          token
        )
        setMessages([...messages, ...result])
      } catch (error) {
        showErrorToast('It was not possible to send your message. Try again later!')
      } finally {
        setLoading(false)
      }
    }
    request()
  }

  function onKeyDown(event) {
    if (event.key === 'Enter') {
      didSendMessage()
    }
  }

  return (
    <S.Main>
      {loading && <Loading.Container/>}
      {selectedChat === 0 && <S.EmptyChatLabel>Select or create a chat</S.EmptyChatLabel>}
      <S.ChatContainer>
        {messages.map((message, index) => (
          <S.MessageContainer>
            <Separator size={16}/>
            <S.MessageTitle>{message.company_name}</S.MessageTitle>
            <Separator size={4}/>
            <S.MessageContent>{message.content}</S.MessageContent>
            <Separator size={16}/>
            {index !== messages.length-1 && <S.MessageSeparator/>}
          </S.MessageContainer>
        ))}
        <div ref={endOfChatRef}/>
      </S.ChatContainer>

      <S.InputContainer>
        <Input type="text" placeholder="Message" value={text} setValue={setText} onKeyDown={onKeyDown}/>
        <S.InputButton onClick={didSendMessage} >
          <FaPaperPlane color="#475E6B"/>
        </S.InputButton>
      </S.InputContainer>
    </S.Main>
  )
}