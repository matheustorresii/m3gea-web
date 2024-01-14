import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import * as S from './styles'
import Button from "../../components/button";
import Input from "../../components/input";
import Separator from "../../components/separator";
import Logo from "../../components/logo/";
import * as Loading from '../../components/loading'
import { postData } from '../../../domain/service/service.js'
import { ToastContext } from '../../../App.jsx'

export default function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  const { showErrorToast } = useContext(ToastContext)
  const { defaultEmail } = location.state || ''
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(defaultEmail ?? '')
  const [password, setPassword] = useState('')

  function didClickLogIn() {
    if (loading || validateForm()) return
    setLoading(true)
    postLogIn()
  }
 
  function postLogIn() {
    const request = async () => {
      try {
        const result = await postData('auth/signin', 
          {
            'password': password,
            'email': email
          }
        )
        navigate('/home', {state: { token: result.token }})
      } catch (error) {
        showErrorToast('It was not possible to Log In. Verify your email and password or try again later!')
      } finally {
        setLoading(false)
      }
    }
    request()
  }

  function didClickSignUp() {
    navigate('/create-account')
  }

  function validateForm() {
    return email === '' ||
           password === '' ||
           password.length < 8 ||
           !email.toLowerCase().match(
             /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           )
  }

  function onKeyDown(event) {
    if (event.key === 'Enter') {
      didClickLogIn()
    }
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
          <Input type="email" hint="Email" value={email} setValue={setEmail} onKeyDown={onKeyDown}/>
          <Separator size={12} />
          <Input type="password" hint="Password" value={password} setValue={setPassword} onKeyDown={onKeyDown}/>
          <Separator size={24} />
          <Button primary="true" onClick={didClickLogIn} disabled={validateForm()}>
            {loading ? <Loading.Container size={16}/> : 'Log In'}
          </Button>
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