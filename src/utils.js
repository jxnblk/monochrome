
const chroma = require('chroma-js')

const toHex = (hsl) => (
  chroma.hsl(hsl).hex()
)

const toHsl = (hex) => {
  try {
    const [ h = 0, s, l ] = chroma(hex).hsl()
    return [ h, s, l ]
  } catch (e) {
    return null
  }
}

const toRgb = (hsl) => {
  try {
    return chroma.hsl(hsl).rgb()
  } catch (e) {
    return null
  }
}

const isDark = color => chroma(color).luminance() < .5

module.exports = {
  toHex,
  toHsl,
  toRgb,
  isDark,
}

