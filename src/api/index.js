const fetch = require('@11ty/eleventy-fetch')

module.exports = async (path, options = {}) => {
  const base = (path) => {
    const base = process.env.API_BASE || 'https://api.trovster.com/'
    return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
  }

  const url = base(path)

  return fetch(url, {
    duration: 0,
    type: 'json',
    ...options
  })
}
