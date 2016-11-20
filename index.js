
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
const robots = require('./src/robots')
const image = require('./src/image')
const bundle = require('./src/bundle')

const json = require('./src/json')
const cssResponse = require('./src/css-response')

module.exports = (req, res) => {
  const [, color ] = req.url.split(/[\/\.]/)

  if (req.url === '/robots.txt') {
    return res.end(robots)
  }

  if (/png$/.test(req.url )) {
    return image({ res, color })
  }

  if (req.url === '/bundle.js') {
    return bundle(res)
  }

  if (/\.json$/.test(req.url)) {
    return json({ res, color })
  }

  if (/\.css/.test(req.url)) {
    return cssResponse({ res, color })
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

