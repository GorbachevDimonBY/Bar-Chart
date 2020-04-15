import React from 'react'
import Column from '../Column'
import { StyleColumnGroup } from './style'

export default function ColumnGroup({months}) {
  const columns = months.map((item, index) => {
    const {month, value} = item
    return (
      <Column height={value} key={index} month={month}/>
    )
  })
  return (
    <StyleColumnGroup>
      { columns }
    </StyleColumnGroup>
  ) 
}