import styled from "styled-components"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  margin: 16px 8px;
  width: 200px;
`

const Selector = styled.div`
  margin: 8px 16px;
  background-color: ${props => props.selected ? "#eeeeee" : "#FFFFFF"};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  cursor: ${props => props.selected ? "auto" : "pointer"};

  &:hover {
    background-color: #eeeeee;
  }
`

const SelectorTitle = styled.label`
  font-weight: 600;
  font-size: 16px;
  margin-left: 8px;
  color: ${props => props.selected ? "#545454" : "#7D8592"};
  cursor: ${props => props.selected ? "auto" : "pointer"};
`

const Add = styled.label`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 8px 16px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const WipTagContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`

const WipTag = styled.label`
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: #e04e46;
  padding: 0px 8px;
  border-radius: 2px;
  color: white;
  font-size: 12px;
`

const Logout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px;
  cursor: pointer;
`

const LogoutTitle = styled.label`
  font-weight: 600;
  color: #7D8592;
  margin-left: 8px;
  cursor: pointer;
`

export {
  Main,
  Selector,
  SelectorTitle,
  WipTagContainer,
  WipTag,
  Add,
  Logout,
  LogoutTitle
}