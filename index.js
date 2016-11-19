
require('babel-register')({
  presets: [
    'react'
  ]
})
const zlib = require('zlib')
const { createElement } = require('react')
const { renderToString, renderToStaticMarkup } = require('react-dom/server')
const { cxs } = require('axs')
const Html = require('./src/Html')
const App = require('./src/App')
const robots = require('./robots')
const image = require('./image')
const bundle = require('./bundle')

module.exports = (req, res) => {
  const [, color ] = req.url.split('/')

  if (req.url === '/robots.txt') {
    return res.end(robots)
  }

  if (/png$/.test(req.url )) {
    return image({ res, color })
  }

  if (req.url === '/bundle.js') {
    return bundle(res)
  }

  const app = renderToString(
    createElement(App, {
      color: color || '007ce0'
    })
  )

  const css = cxs.css
  cxs.reset()

  const html = renderToStaticMarkup(
    createElement(Html, {
      color: color || '007ce0',
      css,
      app
    })
  )

  res.writeHead(200, {'Content-Type': 'text/html', 'Content-Encoding': 'gzip'})

  zlib.gzip(html, (err, result) => {
    res.end(result)
  })
}

