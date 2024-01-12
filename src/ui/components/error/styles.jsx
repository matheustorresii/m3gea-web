import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  width: 250px;
  top: 16px;
  right: 8px;
  background-color: #e04e46;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 8px 16px;
  border-radius: 8px;
  transition: 1s;
`

const Message = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin-left: 8px;
`

export {
  Main,
  Message
}