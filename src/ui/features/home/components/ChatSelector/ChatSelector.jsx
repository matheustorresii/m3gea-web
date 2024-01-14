import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import Separator from '../../../../components/separator'
import { FaPlus } from 'react-icons/fa6'
import * as Loading from '../../../../components/loading'
import { ToastContext } from '../../../../../App'
import * as S from './styles'
import { postData } from '../../../../../domain/service/service'

export default function TabContainer({ token, chats, setChats, selectedChat, setSelectedChat, chatLoading }) {
  const navigate = useNavigate()
  const { showErrorToast } = useContext(ToastContext)
  const [loading, setLoading] = useState(false)

  function createChat() {
    const newChatName = prompt('New chat name:')
    
    if (!newChatName) return

    setLoading(true)
    const request = async () => {
      try {
        const result = await postData('chatrooms', 
          {
            'name': newChatName,
          },
          token
        )
        setSelectedChat(result.id)
        setChats([result, ...chats])
      } catch (error) {
        if(error.response.status === 401) {
          navigate('/')
        } else {
          showErrorToast('It was not possible to create a new chat. Try again later!')
        }
      } finally {
        setLoading(false)
      }
    }
    request()
  }

  function didClickOnChat(id) {
    setSelectedChat(id)
  }

  return (
    <S.Main>
      {loading || chatLoading && <Loading.Container size={24}/>}
      <S.Header>
        <S.HeaderTitle>Chats</S.HeaderTitle>
        <Separator style={{flexGrow: 1}}/>
        <S.HeaderAdd onClick={createChat}>
          <FaPlus color="white"/>
        </S.HeaderAdd>
      </S.Header>

      {chats.map((chat) => (
        <S.ChatContainer key={chat.id} onClick={() => didClickOnChat(chat.id)}>
          {selectedChat === chat.id && <S.ChatSelector/>}
          <S.ChatTitle>{chat.name}</S.ChatTitle>
          {selectedChat === chat.id && <S.ChatSelector/>}
        </S.ChatContainer>
      ))}
    </S.Main>
  )
}
