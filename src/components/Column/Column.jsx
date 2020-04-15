import React from 'react'
import { StyledColumn } from './style'

export default function Column({height, month}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <StyledColumn height={height * 10} value={height} month={month}></StyledColumn>
    </div>
  )
}