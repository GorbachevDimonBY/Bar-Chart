import React, { useState, useEffect, useCallback } from 'react';
import Button from '../Button'
import ColumnGroup from '../ColumnGroup'
import { ButtonWrapper } from './style' 

import {
  MONTHS
} from '../../constants'

function App() {
  const [data, setData] = useState([])

  const onClickAverage = useCallback(() => {
    const averageValue = MONTHS.map(item => ({month: item.month, value: item.average}))
    setData(averageValue)
  }, [])

  const onClickMediana = useCallback(() => {
    const medianaValue = MONTHS.map(item => ({month: item.month, value: item.mediana}))
    setData(medianaValue)
  }, [])

  const onClickMin = useCallback(() => {
    const minValue = MONTHS.map(item => ({month: item.month, value: item.min}))
    setData(minValue)
  }, [])

  const onClickMax = useCallback(() => {
    const maxValue = MONTHS.map(item => ({month: item.month, value: item.max}))
    setData(maxValue)
  }, [])

  useEffect(() => {
    onClickAverage()
  },[onClickAverage])

  return (
    <div style={{display: 'flex'}}>
      <ButtonWrapper>
        <Button label={'min'} onBtnClick={onClickMin}/>
        <Button label={'max'} onBtnClick={onClickMax}/>
        <Button label={'average'} onBtnClick={onClickAverage}/>
        <Button label={'mediana'} onBtnClick={onClickMediana}/>
      </ButtonWrapper>
      <ColumnGroup months={data} />
    </div>
  );
}

export default App;
