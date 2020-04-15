import styled from 'styled-components'

export const StyledColumn = styled.div`
  width: 60px;
  background: ${(props) => (props.height < 0) ? '#4542ed' : '#f54040'};
  margin: 0 10px;
  transition: all 0.7s ease 0s;
  position: relative;
  bottom: ${(props) => (props.height < 0) ? props.height : 0}px;
  height: ${(props) => (props.height < 0) ? -1 * props.height : props.height}px;
  filter: brightness(90%);
  text-align: center;
  
  &:before{
    content: '${(props) => props.month + " " + props.value}';
    top: ${(props) => (props.height < 0) ? `${-props.height}px` : '-35px'};
    position: relative;
    display: none;
  }

  &:hover {
    filter: brightness(150%);
    :before {
      display: inline-block;
    }
  }   
`