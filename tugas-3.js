const divideAndSort = (num) => {
  const str = num.toString()
  const data = []
  let strTemp = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      data.push(strTemp)
      strTemp = ''
    } else {
      strTemp += str[i]
      if (i === str.length - 1) {
        data.push(strTemp)
        strTemp = ''
      }
    }
  }
  
  const finalData = data.map(e => {
    const item = e.split('')
    item.sort()
    console.log(item)
    return item
  }).map(i => i.join(''))
  const finalResult = finalData.join('')
  console.log(parseInt(finalResult))
}

divideAndSort(5956506159046656)