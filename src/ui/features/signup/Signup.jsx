import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import * as S from './styles.jsx'
import Button from "../../components/button"
import Input from "../../components/input"
import Separator from "../../components/separator"
import Logo from "../../components/logo"
import * as Loading from '../../components/loading'
import { postData } from '../../../domain/service/service.js'
import { ToastContext } from '../../../App.jsx'

export default function Signup() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { showErrorToast } = useContext(ToastContext)
  
  function didClickSignUp() {
    if (loading || validateForm()) return
    setLoading(true)
    postSignUp()
  }

  function didClickLogIn(e) {
    e.preventDefault()
    navigate('/')
  }

  function postSignUp() {
    const request = async () => {
      try {
        const result = await postData('auth/signup', 
          {
            'company_name': name,
            'password': password,
            'email': email.toLowerCase()
          }
        )
        navigate('/', { state: { defaultEmail: email }})
      } catch (error) {
        showErrorToast('It was not possible to create your account. Try again later!')
      } finally {
        setLoading(false)
      }
    }
    request()
  }

  function validateForm() {
    return email === '' ||
           password === '' ||
           name === '' ||
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

  return(
    <S.Main>
      <Logo height={80} primary="true"/>

      <S.FormContainer>
        <S.CreateYourAccountTitle>Create your account</S.CreateYourAccountTitle>
        <Separator size={16} />
        <Input type="text" hint="Company Name" value={name} setValue={setName} onKeyDown={onKeyDown}/>
        <Separator size={12} />
        <Input type="email" hint="Email" value={email} setValue={setEmail} onKeyDown={onKeyDown}/>
        <Separator size={12} />
        <Input type="password" hint="Password" value={password} setValue={setPassword} onKeyDown={onKeyDown}/>
        <Separator size={8} />
        <S.FooterLabel style={{width: '100%'}}>Your password must have at least 8 characters.</S.FooterLabel>
        <Separator size={8} />
        <Button primary="true" onClick={didClickSignUp} disabled={validateForm()}>
          {loading ? <Loading.Container size={16}/> : 'Continue'}
        </Button>
        <Separator size={8} />
        <S.AlreadyHaveAnAccount onClick={didClickLogIn}>Already have an account? <S.LogIn>Log in</S.LogIn></S.AlreadyHaveAnAccount>
      </S.FormContainer>

      <S.FooterContainer>
          <S.FooterLabel>Made with love in MG</S.FooterLabel>
      </S.FooterContainer>
    </S.Main>
  )
}