const absoluteUrl = require('./src/_filters/absoluteUrl')

module.exports = config => {
  config.addFilter('absoluteUrl', (href, base) => absoluteUrl(href, base))

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
