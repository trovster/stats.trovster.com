const mix = require('laravel-mix')
const webpackConfig = require('./webpack.config')

mix.webpackConfig(webpackConfig)

mix.setPublicPath('dist')

mix.js('src/js/site.js', 'js').extract([
  'alpinejs',
  'aos',
])
