const palindrom = (data) => {
  return new Promise ((resolve, reject) => {
    let strResult = data.toLowerCase()
    for (let i = 0; i < strResult.length / 2; i++) {
      if (strResult[i] !== data[strResult.length - 1]) {
        reject(new Error(`${data} bukan palindrom`))
      }else {
        resolve(`${data} adalah palindrom`)
      }
    }
  })
}

const palindromResult = (data) => {
  palindrom(data).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
palindromResult('Malam')
