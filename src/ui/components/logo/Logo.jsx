import React from "react"
import styled from "styled-components"
import logo from './logo.svg'

const LogoImage = styled.img`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  filter: ${(props) => props.primary === "true" ? "invert(0)" : "invert(1)"};
`

export default function Logo({ height, width, primary }) {
  return (
    <LogoImage
      src={logo}
      height={height}
      width={width}
      primary={primary}
    />
  )
}
