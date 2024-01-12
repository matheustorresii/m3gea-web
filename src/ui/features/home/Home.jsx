import React from "react";
import { FaUser } from 'react-icons/fa6'
import * as S from './styles'
import TabContainer from './components/TabContainer'
import ChatSelector from './components/ChatSelector'
import Chat from './components/Chat'

export default function Home() {
  return (
    <S.Main>
      <TabContainer/>

      <S.MainContainer>
        <S.Header>
          <S.ProfileContainer>
            <FaUser/>
            <S.ProfileName>Matheus Torres</S.ProfileName>
          </S.ProfileContainer>
        </S.Header>

        <S.PageContainer>
          <ChatSelector/>
          <Chat />
        </S.PageContainer>
        
      </S.MainContainer>
    </S.Main>
  )
}