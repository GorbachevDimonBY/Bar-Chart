import React from 'react'
import { StyledButton } from './style' 

export default function Button({label, onBtnClick}) {
  return <StyledButton onClick={onBtnClick}>{label}</StyledButton>
}