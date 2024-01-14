import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  margin: 16px 8px;
  width: 280px;
  overflow: scroll;
  position: relative;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px;
  background: white;
`

const HeaderTitle = styled.label`
  font-size: 14px;
  color: #91929e;
`

const HeaderAdd = styled.div`
  width: 16px;
  height: 16px;
  padding: 4px 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  cursor: pointer;
`

const ChatContainer = styled.div`
  position: relative;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px 0px;
  margin: 8px 16px;
  cursor: pointer;
`

const ChatTitle = styled.label`
  font-size: 14px;
  color: #0A1629;
  font-weight: 700;
  text-align: center;
  margin: 4px;
  width: 100%;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
`

const ChatSelector = styled.div`
  background: #555555;
  width: 4px;
  height: 24px;
  border-radius: 2px;
  cursor: pointer;
  
`

export {
  Main,
  Header,
  HeaderTitle,
  HeaderAdd,
  ChatContainer,
  ChatTitle,
  ChatSelector
}