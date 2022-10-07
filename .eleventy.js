require('dotenv').config()

const absoluteUrl = require('./src/_filters/absoluteUrl')
const { number, miles, hours, minutes } = require('./src/_filters/numbers')

module.exports = config => {
  config.addFilter('absoluteUrl', absoluteUrl)
  config.addFilter('formattedNumber', number)
  config.addFilter('miles', miles)
  config.addFilter('hours', hours)
  config.addFilter('minutes', minutes)

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts'
    }
  }
}
