import React from "react";
import Logo from '../../../../components/logo'
import Separator from '../../../../components/separator'
import { FaLayerGroup, FaPlus, FaRightToBracket } from 'react-icons/fa6'
import * as S from './styles'

export default function TabContainer() {
  function onClickLogout() {
    console.log('logout')
  }

  return (
    <S.Main>
      <Logo width={200} height={130} primary="true"/>
      
      <S.Selector selected={true}>
        <FaLayerGroup color="#545454"/>
        <S.SelectorTitle  selected={true}>Strategy</S.SelectorTitle>
      </S.Selector>

      <S.Add>
        <FaPlus color="#545454"/>
      </S.Add>

      <Separator style={{flexGrow: 1}}/>

      <S.Logout onClick={onClickLogout}>
        <FaRightToBracket color="#7D8592"/>
        <S.LogoutTitle>Log out</S.LogoutTitle>
      </S.Logout>
    </S.Main>
  )
}