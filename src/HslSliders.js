
const React = require('react')
const round = require('lodash.round')
const { Flex, Box, withBox } = require('axs')
const Rebass = require('rebass')

const Slider = withBox(Rebass.Slider)

const HslSliders = ({
  h, s, l,
  onChange
}) => {
  const cx = {
    root: {
      flexWrap: 'wrap'
    },
    slider: {
      'input:focus': {
        backgroundColor: 'currentcolor',
        outline: 'none'
      }
    }
  }

  return (
    <Flex mx-2 css={cx.root}>
      <Box width={[ 1, 1/3 ]} px2>
        <Slider
          name='h'
          label={'Hue ' + round(h)}
          value={h}
          min={0}
          max={360}
          css={cx.slider}
          onChange={onChange} />
      </Box>
      <Box width={[ 1, 1/3 ]} px2>
        <Slider
          name='s'
          label={'Saturation ' + round(s, 2)}
          value={s}
          min={0}
          step={1/100}
          max={1}
          css={cx.slider}
          onChange={onChange} />
      </Box>
      <Box width={[ 1, 1/3 ]} px2>
        <Slider
          name='l'
          label={'Lightness ' + round(l, 2)}
          value={l}
          min={0}
          max={1}
          step={1/100}
          css={cx.slider}
          onChange={onChange} />
      </Box>
    </Flex>
  )
}

module.exports = HslSliders

