import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 0px 40px;
`

const CreateYourAccountTitle = styled.label`
  font-weight: 600;
  font-size: 48px;
  width: 100%;
  text-align: start;
`

const AlreadyHaveAnAccount = styled.a`
  width: 100%;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  color: #4D4D4D;
`

const LogIn = styled.span`
  color: #000000;
  font-weight: 600;
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
  FormContainer,
  CreateYourAccountTitle,
  AlreadyHaveAnAccount,
  LogIn,
  FooterContainer,
  FooterLabel
}