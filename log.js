const digits = require('./data')

const arrOfDigits = []
digits.doubleDigit.forEach(d=>{
  digits.singleDigit.map(s=> {
    arrOfDigits.push(`${d}${s}`)
  })
})

console.log(arrOfDigits);