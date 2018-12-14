const data = require('./data')

module.exports = function (num) {
  num = num.toString()
  if (num.length === 3) {
    return `${data.tripleDigit[parseInt(num.split('').shift())]} ${data.singleOrDoubleDigit[parseInt(num.slice(1, 3))]}`
  } else {
    return data.singleOrDoubleDigit[parseInt(num)]
  }
}
