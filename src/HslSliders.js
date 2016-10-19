
const React = require('react')
const round = require('lodash.round')
const { Flex, Box } = require('reflexbox')
const { Slider } = require('rebass')

const HslSliders = ({
  h, s, l,
  onChange
}) => {
  return (
    <Flex mx={-2} wrap>
      <Box col={12} sm={4} px={2}>
        <Slider
          name='h'
          label={'Hue ' + round(h)}
          value={h}
          min={0}
          max={360}
          onChange={onChange} />
      </Box>
      <Box col={12} sm={4} px={2}>
        <Slider
          name='s'
          label={'Saturation ' + round(s, 2)}
          value={s}
          min={0}
          step={1/100}
          max={1}
          onChange={onChange} />
      </Box>
      <Box col={12} sm={4} px={2}>
        <Slider
          name='l'
          label={'Lightness ' + round(l, 2)}
          value={l}
          min={0}
          max={1}
          step={1/100}
          onChange={onChange} />
      </Box>
    </Flex>
  )
}

module.exports = HslSliders

