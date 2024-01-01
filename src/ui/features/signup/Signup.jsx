import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import * as S from './styles.jsx'
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";
import Separator from "../../components/Separator";

export default function Signup() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  function didClickSignUp() {
    console.log('sign up')
  }

  function didClickLogIn(e) {
    e.preventDefault()
    navigate('/')
  }

  return(
    <S.Main>
      <label style={{color: "#000000"}}>M3</label>

      <S.FormContainer>
        <S.CreateYourAccountTitle>Create your account</S.CreateYourAccountTitle>
        <Separator size={16} />
        <Input type="text" hint="Name" value={name} setValue={setName}/>
        <Separator size={12} />
        <Input type="email" hint="Email" value={email} setValue={setEmail}/>
        <Separator size={12} />
        <Input type="password" hint="Password" value={password} setValue={setPassword}/>
        <Separator size={8} />
        <Button primary="true" onClick={didClickSignUp} disabled={email == '' || password == '' || name == ''}>Continue</Button>
        <Separator size={8} />
        <S.AlreadyHaveAnAccount onClick={didClickLogIn}>Already have an account? <S.LogIn>Log in</S.LogIn></S.AlreadyHaveAnAccount>
      </S.FormContainer>

      <S.FooterContainer>
          <S.FooterLabel>Made with love in MG</S.FooterLabel>
      </S.FooterContainer>
    </S.Main>
  )
}