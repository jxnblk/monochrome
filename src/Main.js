
const React = require('react')
const { Box } = require('axs')
const { Flex, Heading } = require('axs-ui')
const round = require('lodash.round')
const Input = require('./Input')
const HslSliders = require('./HslSliders')
const Tweet = require('./Tweet')
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

  const cx = {
    root: {
      padding: 48,
      flexDirection: 'column',
      minHeight: '100vh'
    },
    space: {
      flex: '1 1 auto'
    },
    pre: {
      fontSize: 14
    }
  }

  const rgb = toRgb([ h, s, l])

  return (
    <Flex css={cx.root}>
      <Flex>
        <Heading size={3} m0 mb3>
          monochrome
        </Heading>
        <Box css={cx.space} />
        <Tweet />
      </Flex>
      <Input
        name='color'
        mt={4}
        mb={4}
        value={hex}
        onChange={e => onHexChange(e.target.value)}
      />
      <Box is='pre' className='mono' css={cx.pre}>
        rgb({rgb.join(', ')})
      </Box>
      <Box is='pre' className='mono' css={cx.pre}>
        hsl({round(h)}, {round(s, 2)}, {round(l, 2)})
      </Box>
      <Box css={cx.space} />
      <HslSliders {...props} />
    </Flex>
  )
}

module.exports = Main

