
const chroma = require('chroma-js')
const createPalette = require('./palette')

module.exports = ({
  res,
  color
}) => {
  const [ h, s, l ] = chroma('#' + color).hsl()
  const pal = createPalette({ h, s, l })
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  return JSON.stringify(pal, null, 2)
}

