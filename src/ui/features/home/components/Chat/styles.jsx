import styled from "styled-components"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  margin: 16px 8px;
  width: 100%;
  padding: 16px;
  overflow: hidden;
`

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  flex-grow: 1;
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MessageTitle = styled.label`
  font-size: 16px;
  font-weight: 700;
`

const MessageContent = styled.label`
  font-size: 14px;
`

const MessageSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #475E6B;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const InputButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px #475E6B solid;
  border-radius: 4px;
  height: 97%;
  padding: 0px 36px;
  margin-left: 16px;
  cursor: pointer;
`

export {
  Main,
  ChatContainer,
  InputContainer,
  InputButton,
  MessageContainer,
  MessageTitle,
  MessageContent,
  MessageSeparator
}