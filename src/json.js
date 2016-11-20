
const chroma = require('chroma-js')
const createPalette = require('./palette')

module.exports = ({
  res,
  color
}) => {
  const [ h, s, l ] = chroma('#' + color).hsl()
  const pal = createPalette({ h, s, l })

  return JSON.stringify(pal, null, 2)
}

