import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { FaUser } from 'react-icons/fa6'
import * as S from './styles'
import * as Loading from '../../components/loading'
import TabContainer from './components/TabContainer'
import ChatSelector from './components/ChatSelector'
import Chat from './components/Chat'
import Logo from '../../components/logo'
import { fetchData } from "../../../domain/service/service";
import { ToastContext } from '../../../App.jsx'

export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const { token } = location.state || ''
  const { showErrorToast } = useContext(ToastContext)
  const [loading, setLoading] = useState(true)
  const [chats, setChats] = useState([])
  const [messages, setMessages] = useState([])
  const [selectedChat, setSelectedChat] = useState(0)
  const [chatLoading, setChatLoading] = useState(false)

  useEffect(() => {
    getAllChats()
    getUser()
  }, [])

  useEffect(() => {
    getChatMessages()
  }, [selectedChat])

  function getUser() {
    const user = JSON.parse(atob(token.split('.')[1]))
    return user.company_name
  }

  function getAllChats() {
    setLoading(true)
    const request = async () => {
      try {
        const result = await fetchData('chatrooms', 
          token
        )
        setChats(result.reverse())
      } catch (error) {
        if(error.response.status === 401) {
          navigate('/')
        } else {
          showErrorToast('It was not possible to get your chats. Try again later!')
        }
      } finally {
        setLoading(false)
      }
    }
    request()
  }

  function getChatMessages() {
    if (selectedChat === 0) return
    setChatLoading(true)
    const request = async () => {
      try {
        const result = await fetchData(`chatrooms/${selectedChat}`, 
          token
        )
        if (result.messages) {
          setMessages(result.messages)
        } else {
          setMessages([])
        }
      } catch (error) {
        if(error.response.status === 401) {
          navigate('/')
        } else {
          showErrorToast('It was not possible to get the history of your chat. Try again later!')
        }
      } finally {
        setChatLoading(false)
      }
    }
    request()
  }

  function didClickLogout() {
    navigate('/', { state: {}})
  }

  return (
    <S.Main>
      {loading && 
        <S.LoadingContainer>
          <Loading.Container size={300}/>
          <Logo width={200} height={130} primary="true"/>
        </S.LoadingContainer>
      }

      <TabContainer didClickLogout={didClickLogout}/>

      <S.MainContainer>
        <S.Header>
          <S.ProfileContainer>
            <FaUser/>
            <S.ProfileName>{getUser()}</S.ProfileName>
          </S.ProfileContainer>
        </S.Header>

        <S.PageContainer>
          <ChatSelector token={token} chats={chats} setChats={setChats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} chatLoading={chatLoading}/>
          <Chat token={token} messages={messages} setMessages={setMessages} selectedChat={selectedChat}/>
        </S.PageContainer>
        
      </S.MainContainer>
    </S.Main>
  )
}