import styled from "styled-components"

const Button = styled.button`
  position: relative;
  height: 44px;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.primary ? "#FFFFFF" : "#000000"};
  background-color: ${(props) => props.primary ? "#000000" : "#E8EDFF"};
  pointer-events: ${props => props.disabled ? "none" : "all"};
  opacity: ${props => props.disabled ? 0.7 : 1};

  &:hover {
    opacity: 0.8;
  }
`

export default Button