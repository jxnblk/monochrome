
const React = require('react')
const round = require('lodash.round')
const { toHsl, toRgb } = require('./utils')

module.exports = ({
  hex
}) => {
  hex = hex.replace(/^#/, '')
  const hsl = toHsl(hex)
  const rgb = toRgb(hsl)

  const rgbstr = rgb.map(v => round(v)).join(', ')
  const hslstr = hsl.map(v => round(v, 2)).join(', ')

  const desc = `rgb(${rgbstr}) hsl(${hslstr})`

  return [
    <meta name='twitter:card' content='summary_large_image' />,
    <meta name='twitter:site' content='@jxnblk' />,
    <meta name='twitter:title' content={'#' + hex} />,
    <meta name='twitter:description' content={desc} />,
    <meta name='twitter:image' content={`https://monochrome.jxnblk.com/${hex}/png`} />,
  ]
}
