
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

const spreadLum = ({ h, s, l }) => {
  const base = chroma.hsl(h, s, l).luminance()
  const lowerstep = base / 5
  const upperstep = (1 - base) / 6
  const lower = [
    4, 3, 2, 1
  ].map(step => chroma.hsl(h, s, l).luminance(step * lowerstep).hex())
  const upper = [
    5, 4, 3, 2, 1, 0
  ].map(step => chroma.hsl(h, s, l).luminance(base + step * upperstep).hex())

  return [ ...upper, ...lower ]
}

module.exports = ({ h, s, l }) => {
  const name = isNaN(h) ? 'gray' : huename(h)
  const hex = toHex([ h, s, l ])
  const text = isDark(hex) ? '#fff' : '#000'

  const result = {
    [name]: hex,
    text,
    shades: steps.map(createLum({ h, s, l })),
    // spread: spreadLum({ h, s, l })
  }

  return result
}

