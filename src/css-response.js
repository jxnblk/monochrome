
const chroma = require('chroma-js')
const createPalette = require('./palette')

const createPropDef = ({ key, value }) => `--${key}: ${value}`

const createRule = (prop, prefix = '') =>
  ({ key }) =>
  `.${prefix + key} { ${prop}: var(--${key}) }`

module.exports = ({
  res,
  color
}) => {
  const [ h, s, l ] = chroma('#' + color).hsl()
  const pal = createPalette({ h, s, l })
  const key = Object.keys(pal)[0]
  const colors = [
    {
      key: key,
      value: pal[key]
    },
    ...pal.shades.map((value, i) => ({
      key: key + i,
      value
    }))
  ]

  const root = `:root {\n  ${colors.map(createPropDef).join(';\n  ')}\n}`

  const rules = colors.map(createRule('color'))
  const bg = colors.map(createRule('background-color', 'bg-'))

  return [
    root,
    ...rules,
    ...bg
  ].join('\n')
}
