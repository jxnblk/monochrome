
const fs = require('fs')
const chroma = require('chroma-js')
const PNG = require('pngjs').PNG

const image = ({
  res,
  color = 'fff8b0'
}) => {
  const [ r, g, b ] = chroma(color).rgb()

  res.setHeader('Content-Type', 'image/png')
  fs.createReadStream(__dirname + `/card.png`)
    .pipe(new PNG())
    .on('parsed', function () {
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          const idx = (this.width * y + x) << 2
          const { data } = this


          data[idx] = r
          data[idx + 1] = g
          data[idx + 2] = b

          data[idx+3] = 0xff
        }
      }

      this.pack().pipe(res)
    })
}

module.exports = image

