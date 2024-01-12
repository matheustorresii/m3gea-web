import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background: #d4d4d4;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  margin: 16px 8px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Header = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: end;
`

const ProfileContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileName = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #0A1629;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
`

export {
  Main,
  PageContainer,
  MainContainer,
  Header,
  ProfileContainer,
  ProfileName
}