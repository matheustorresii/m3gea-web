import React from "react"
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoadingView = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid black;
  border-radius: 50%;
  height: ${props => `${props.size ?? 32}px`};
  width: ${props => `${props.size ?? 32}px`};
  animation: ${rotate} 0.5s linear infinite;
`

const ContainerMain = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.25;
  z-index: 2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`

function View({ size }) {
  return (
    <Main>
      <LoadingView size={size}/>
    </Main>
  )
}

function Container({ size }) {
  return (
    <ContainerMain>
      <View size={size}/>
    </ContainerMain>
  )
}

export {
  View, Container
}
