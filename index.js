const data = require('./data')

module.exports = function translateNumberToGreek (num) {
  num = num.toString()
  if (num.length >= 3 && num.length < 7) {
    let fourDigitString
    if (num.length === 4 && num[0] === '1') {
      fourDigitString = 'χίλια'
    } else {
      const fourDigitNumber = num.slice(0, num.length - 3)
      fourDigitString = `${data.fourOrFiveDigits[parseInt(fourDigitNumber.slice(-2))]} χιλιάδες`
      if (fourDigitNumber.length === 3) {
        fourDigitString = `${data.sixDigits[parseInt(fourDigitNumber.slice(0,1))]} ${fourDigitString}`
      }
    }

    const threeDigitNumber = num.slice(-3)
    return `${fourDigitString} ${data.tripleDigit[parseInt(threeDigitNumber.slice(0,1))]} ${data.singleOrDoubleDigit[parseInt(threeDigitNumber.slice(1, 3))]}`
  }
  else if (num.length === 3) {
    return `${data.tripleDigit[parseInt(num.split('').slice(0,1))]} ${data.singleOrDoubleDigit[parseInt(num.slice(1, 3))]}`
  } 
  else if (num.length < 3) {
    return data.singleOrDoubleDigit[parseInt(num)]
  }
  else {
    throw new RangeError('Biggest supported number is 999,999.')
  }
}
