
const chroma = require('chroma-js')
const huename = require('hue-name')
const { toHex, isDark } = require('./utils')

const steps = [
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  0,
].map(n => n + .5).map(n => n / 10)

const createLum = ({ h, s, l }) => lum =>
  chroma.hsl(h, s, l).luminance(lum).hex()

module.exports = ({ h, s, l }) => {
  const name = isNaN(h) ? 'gray' : huename(h)
  const hex = toHex([ h, s, l ])
  const text = isDark(hex) ? '#fff' : '#000'

  const result = {
    [name]: hex,
    text,
    shades: steps.map(createLum({ h, s, l }))
  }

  return result
}

