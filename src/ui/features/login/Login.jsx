import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Button from "../../components/button";
import Input from "../../components/input";
import Separator from "../../components/separator";
import Logo from "../../components/logo/";

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function didClickLogIn() {
    console.log(email, password)
    navigate('/home')
  }

  function didClickSignUp() {
    navigate('/create-account')
  }

  return (
    <S.Main>
      <S.LogoContainer>
        <Logo height={150} primary="false"/>
      </S.LogoContainer>

      <S.ContentContainer>
        <Logo height={80} primary="true"/>

        <S.FormContainer>
          <S.LoginTitle>Login</S.LoginTitle>
          <Separator size={8} />
          <S.LoginDescription>Login with the data you entered during your registration</S.LoginDescription>
          <Separator size={16} />
          <Input type="email" hint="Email" value={email} setValue={setEmail}/>
          <Separator size={12} />
          <Input type="password" hint="Password" value={password} setValue={setPassword}/>
          <Separator size={24} />
          <Button primary="true" onClick={didClickLogIn} disabled={email === '' || password === ''}>Log In</Button>
          <Separator size={8} />
          <S.ForgotPassword>Did you forget your password?</S.ForgotPassword>
          <Separator size={44} />
          
          <S.SignUpContainer>
            <S.SignUpTitle>Sign Up</S.SignUpTitle>
            <Separator size={8} />
            <S.SignUpDescription>Login with the data you entered during your registration</S.SignUpDescription>
            <Separator size={24} />
            <Button onClick={didClickSignUp}>Create account</Button>
          </S.SignUpContainer>

        </S.FormContainer>

        <S.FooterContainer>
          <S.FooterLabel>Made with love in MG</S.FooterLabel>
        </S.FooterContainer>
      </S.ContentContainer>
    </S.Main>
  )
}