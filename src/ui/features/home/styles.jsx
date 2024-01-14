import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background: #d4d4d4;
  position: relative;
`

const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 3;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Header = styled.div`
  margin: 16px 8px 0px 16px;
  display: flex;
  flex-direction: column;
  align-items: end;
`

const ProfileContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileName = styled.label`
  margin-left: 8px;
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
  LoadingContainer,
  PageContainer,
  MainContainer,
  Header,
  ProfileContainer,
  ProfileName
}