const data = require('./data')

const JANUARY_VALUE = data.slice(0, 31).map(item => +item.value)
const FEBRUARY_VALUE = data.slice(31, 60).map(item => +item.value)
const MARCH_VALUE = data.slice(60, 91).map(item => +item.value)
const APRIL_VALUE = data.slice(91, 121).map(item => +item.value)
const MAY_VALUE = data.slice(121, 152).map(item => +item.value)
const JUNE_VALUE = data.slice(152, 182).map(item => +item.value)
const JULY_VALUE = data.slice(182, 213).map(item => +item.value)
const AUGUST_VALUE = data.slice(213, 244).map(item => +item.value)
const SEPTEMBER_VALUE = data.slice(244, 274).map(item => +item.value)
const OCTOBER_VALUE = data.slice(274, 305).map(item => +item.value)
const NOVEMBER_VALUE = data.slice(305, 335).map(item => +item.value)
const DECEMBER_VALUE = data.slice(335, 366).map(item => +item.value)

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
  
  return ((sortValue[middle] + sortValue[middle + 1]) / 2).toFixed(1);
}

export const MONTHS = [
  {
    month: 'Январь',
    min: getMinValue(JANUARY_VALUE),
    max: getMaxValue(JANUARY_VALUE),
    average: getAverageValue(JANUARY_VALUE),
    mediana: getMedianaValue(JANUARY_VALUE)
  },
  {
    month: 'Февраль',
    min: getMinValue(FEBRUARY_VALUE),
    max: getMaxValue(FEBRUARY_VALUE),
    average: getAverageValue(FEBRUARY_VALUE),
    mediana: getMedianaValue(FEBRUARY_VALUE)
  },
  {
    month: 'Март',
    min: getMinValue(MARCH_VALUE),
    max: getMaxValue(MARCH_VALUE),
    average: getAverageValue(MARCH_VALUE),
    mediana: getMedianaValue(MARCH_VALUE)
  },
  {
    month: 'Апрель',
    min: getMinValue(APRIL_VALUE),
    max: getMaxValue(APRIL_VALUE),
    average: getAverageValue(APRIL_VALUE),
    mediana: getMedianaValue(APRIL_VALUE)
  },
  {
    month: 'Май',
    min: getMinValue(MAY_VALUE),
    max: getMaxValue(MAY_VALUE),
    average: getAverageValue(MAY_VALUE),
    mediana: getMedianaValue(MAY_VALUE)
  },
  {
    month: 'Июнь',
    min: getMinValue(JUNE_VALUE),
    max: getMaxValue(JUNE_VALUE),
    average: getAverageValue(JUNE_VALUE),
    mediana: getMedianaValue(JUNE_VALUE)
  },
  {
    month: 'Июль',
    min: getMinValue(JULY_VALUE),
    max: getMaxValue(JULY_VALUE),
    average: getAverageValue(JULY_VALUE),
    mediana: getMedianaValue(JULY_VALUE)
  },
  {
    month: 'Август',
    min: getMinValue(AUGUST_VALUE),
    max: getMaxValue(AUGUST_VALUE),
    average: getAverageValue(AUGUST_VALUE),
    mediana: getMedianaValue(AUGUST_VALUE)
  },
  {
    month: 'Сентябрь',
    min: getMinValue(SEPTEMBER_VALUE),
    max: getMaxValue(SEPTEMBER_VALUE),
    average: getAverageValue(SEPTEMBER_VALUE),
    mediana: getMedianaValue(SEPTEMBER_VALUE)
  },
  {
    month: 'Октябрь',
    min: getMinValue(OCTOBER_VALUE),
    max: getMaxValue(OCTOBER_VALUE),
    average: getAverageValue(OCTOBER_VALUE),
    mediana: getMedianaValue(OCTOBER_VALUE)
  },
  {
    month: 'Ноябрь',
    min: getMinValue(NOVEMBER_VALUE),
    max: getMaxValue(NOVEMBER_VALUE),
    average: getAverageValue(NOVEMBER_VALUE),
    mediana: getMedianaValue(NOVEMBER_VALUE)
  },
  {
    month: 'Декабрь',
    min: getMinValue(DECEMBER_VALUE),
    max: getMaxValue(DECEMBER_VALUE),
    average: getAverageValue(DECEMBER_VALUE),
    mediana: getMedianaValue(DECEMBER_VALUE)
  },
]

