
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

module.exports = (res) => {
  const filename = path.join(process.cwd(), 'public/bundle.js')
  const stream = fs.createReadStream(filename)
  const gzip = zlib.createGzip()

  res.writeHead(200, {
    'Content-Type': 'application/javascript',
    'Content-Encoding': 'gzip'
  })

  stream.pipe(gzip).pipe(res)
}

