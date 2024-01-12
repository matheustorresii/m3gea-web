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
  width: 100%;
`

const LoadingView = styled.div`
  position: fixed;
  border: 8px solid #f3f3f3;
  border-top: 8px solid black;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${rotate} 0.5s linear infinite;
`

const ContainerMain = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.25;
  z-index: 2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`

function View() {
  return (
    <Main>
      <LoadingView/>
    </Main>
  )
}

function Container() {
  return (
    <ContainerMain>
      <View/>
    </ContainerMain>
  )
}

export {
  View, Container
}
