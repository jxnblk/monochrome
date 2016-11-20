
const React = require('react')
const { Flex, Box } = require('axs')
const Chip = require('./Chip')

const Luminances = ({ h, s, l, palette }) => {
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
        {palette.shades.map(hex => (
          <Chip key={hex} color={hex} />
        ))}
      </Flex>
    </Box>
  )
}

module.exports = Luminances

