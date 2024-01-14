import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Placeholder = styled.label`
  position: absolute;
  font-size: 14px;
  margin: 8px;
  color: #4D4D4D;
  pointer-events: none;
  margin: ${(props) => props.focused === 'true' ? '-54px 8px 0px 8px' : '16px'};
  background-color: white;
  transition: 0.25s;
  padding: 0px 4px;
`

const Textfield = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  background-color: clear;
  height: 36px;
  border-radius: 4px;
  border: 1.5px #CACACA solid;
  font-size: 16px;
  padding: 8px;

  &:focus {
    border: 1.5px #475E6B solid;
  }
`

export { Main, Placeholder, Textfield }