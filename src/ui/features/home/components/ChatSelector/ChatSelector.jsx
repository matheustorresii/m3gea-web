import React from "react";
import Separator from '../../../../components/separator'
import { FaPlus } from 'react-icons/fa6'
import * as S from './styles'

export default function TabContainer() {
  function createChat() {

  }

  function didClickOnChat() {

  }

  return (
    <S.Main>
      <S.Header>
        <S.HeaderTitle>Chats</S.HeaderTitle>
        <Separator style={{flexGrow: 1}}/>
        <S.HeaderAdd onClick={createChat}>
          <FaPlus color="white"/>
        </S.HeaderAdd>
      </S.Header>

      <S.ChatContainer onClick={didClickOnChat}>
        <S.ChatSelector/>
        <S.ChatTitle>Title</S.ChatTitle>
        <S.ChatSelector/>
      </S.ChatContainer>
    </S.Main>
  )
}