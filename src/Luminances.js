
const React = require('react')
const { Flex, Box } = require('axs-ui')
const Chip = require('./Chip')

const Luminances = ({ h, s, l, steps = [] }) => {
  const cx = {
    root: {
      padding: 48
    },
    flex: {
      flexWrap: 'wrap'
    }
  }

  return (
    <Box css={cx.root}>
      <Flex mx={-1}
        css={cx.flex}>
        {steps.map(hex => (
          <Chip key={hex} color={hex} />
        ))}
      </Flex>
    </Box>
  )
}

module.exports = Luminances

