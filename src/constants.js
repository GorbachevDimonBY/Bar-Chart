const data = require('./data')

function getMonthsValue() {
  const year = [];
  let monthValue = [];
  data.reduce((acc, item) => {
    if (acc.date.split(' ')[1] === item.date.split(' ')[1]) {
      monthValue.push(+acc.value)
      return acc = item
    } else {
      monthValue.push(+acc.value)
      year.push({month: replaceLetters(acc.date.split(' ')[1]), value: monthValue})
      monthValue = []
      return acc = item
    } 
  })
  monthValue.push(+data[data.length -1].value)   
  year.push({month: replaceLetters(data[data.length -1].date.split(' ')[1]), value: monthValue})
  return year
}

function replaceLetters(str) {
  if (str.endsWith('а')) return str.slice(0, -1)
  if (str.endsWith('я') && str.length > 3) {
    return str.replace(/.$/,"ь")
  } else {
    return str.replace(/.$/,"й")
  } 
}

const getMinValue = (totalValue) => Math.min.apply(null, totalValue)
const getMaxValue = (totalValue) => Math.max.apply(null, totalValue)

const getAverageValue = (totalValue) => {
  return +(totalValue.reduce((acc, item) => acc + item) / totalValue.length).toFixed(1);
}

const getMedianaValue = (totalValue) => {
  const sortValue = totalValue.sort((a, b) => {
    return a - b;
  })

  const middle = Math.floor((sortValue.length - 1) / 2); 
  if (sortValue.length % 2) return sortValue[middle];
  
  return +((sortValue[middle] + sortValue[middle + 1]) / 2).toFixed(1);
}

export const MONTHS = getMonthsValue().map(item => {
  return {
    month: item.month,
    min: getMinValue(item.value),
    max: getMaxValue(item.value),
    average: getAverageValue(item.value),
    mediana: getMedianaValue(item.value),
  }
})