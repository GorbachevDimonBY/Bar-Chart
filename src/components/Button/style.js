import styled from 'styled-components'

export const StyledButton = styled.button`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  outline: none;
  margin: 10px 0;
  
  &:hover {
    color: gray;
    text-shadow: gray;
    transition: all 0.3s easy;
    border: 3px solid gray;
    box-shadow: 0 0 15px gray;
  }
`
