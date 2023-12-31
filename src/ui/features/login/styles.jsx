import styled from "styled-components"

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoContainer = styled(Container)`
  background: black;
`

const ContentContainer = styled(Container)`
  background: white;
  padding: 0px 40px;
  justify-content: space-around;
  align-items: start;
  flex-flow: column;
`

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const LoginTitle = styled.label`
  font-weight: 600;
  font-size: 48px;
`

const LoginDescription = styled.label`
  font-size: 16px;
  color: #4D4D4D;
`

const ForgotPassword = styled.a`
  width: 100%;
  text-align: end;
  font-size: 14px;
  cursor: pointer;
  color: #4D4D4D;
`

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #CACACA;
  border-radius: 5px;
  padding: 24px;
`

const SignUpTitle = styled.label`
  font-size: 24px;
  font-weight: 600;
`

const SignUpDescription = styled.label`
  font-size: 16px;
  color: #4D4D4D;
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const FooterLabel = styled.label`
  font-size: 12px;
  color: #4D4D4D;
`

export { 
  Main, 
  LogoContainer, 
  ContentContainer, 
  FormContainer, 
  LoginTitle, 
  LoginDescription, 
  ForgotPassword, 
  SignUpContainer, 
  SignUpTitle, 
  SignUpDescription,
  FooterContainer,
  FooterLabel
}