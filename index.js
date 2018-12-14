const data = require('./data')

module.exports = function (num) {
  num = num.toString()
  if (num.length > 6 && num.length < 10) {
    let fourDigitString=''
    if (num.length === 4 && num[0] === '1') {
      fourDigitString = 'χίλια'
    } else {
      const fourDigitNumber = num.slice(0, num.length - 3)
      fourDigitString = `${data.sixDigits[parseInt(fourDigitNumber.split('').shift())]} ${data.fourOrFiveDigits[parseInt(fourDigitNumber.slice(1, 3))]} χιλιάδες`
    }
  if (num.length > 3 && num.length < 7) {
    let fourDigitString
    if (num.length === 4 && num[0] === '1') {
      fourDigitString = 'χίλια'
    } else {
      const fourDigitNumber = num.slice(0, num.length - 3)
      fourDigitString = `${data.sixDigits[parseInt(fourDigitNumber.split('').shift())]} ${data.fourOrFiveDigits[parseInt(fourDigitNumber.slice(1, 3))]} χιλιάδες`
    }

    const threeDigitNumber = num.slice(-3)
    return `${fourDigitString} ${data.tripleDigit[parseInt(threeDigitNumber.split('').shift())]} ${data.singleOrDoubleDigit[parseInt(threeDigitNumber.slice(1, 3))]}`
  }
  if (num.length === 3) {
    return `${data.tripleDigit[parseInt(num.split('').shift())]} ${data.singleOrDoubleDigit[parseInt(num.slice(1, 3))]}`
  } else {
    return data.singleOrDoubleDigit[parseInt(num)]
  }
}
