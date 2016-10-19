
const React = require('react')
const { Flex, Box } = require('reflexbox')
const round = require('lodash.round')
const Input = require('./Input')
const HslSliders = require('./HslSliders')
const { toRgb } = require('./utils')

const Main = (props) => {
  const {
    h,
    s,
    l,
    hex,
    value,
    onHexChange,
  } = props

  const sx = {
    root: {
      padding: 48,
      minHeight: '100vh'
    },
    heading: {
      fontSize: 20,
      margin: 0,
      marginBottom: 32
    },
    pre: {
      fontSize: 14
    }
  }

  const rgb = toRgb([ h, s, l])

  return (
    <Flex
      column
      style={sx.root}>
      <h1 style={sx.heading}>monochrome</h1>
      <Input
        name='color'
        mt={4}
        mb={4}
        value={hex}
        onChange={e => onHexChange(e.target.value)}
      />
      <pre className='mono' style={sx.pre}>
        rgb({rgb.join(', ')})
      </pre>
      <pre className='mono' style={sx.pre}>
        hsl({round(h)}, {round(s, 2)}, {round(l, 2)})
      </pre>
      <Box auto />
      <HslSliders {...props} />
    </Flex>
  )
}

module.exports = Main

