
const React = require('react')
const chroma = require('chroma-js')
const { Flex, Box } = require('axs')
const Chip = require('./Chip')

// <Chip color={hex} />

const lums = [
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
]
  .map(n => n + .5)
  .map(n => n / 10)

const createLums = ({ h, s, l }) => {
  const base = chroma.hsl(h, s, l).hex()
  const colors = lums.map(lum => {
    return chroma('' + base).luminance(lum).hex()
  })

  return colors
}

const Luminances = ({ h, s, l }) => {
  const colors = createLums({ h, s, l })

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
        {colors.map(hex => (
          <Chip key={hex} color={hex} />
        ))}
      </Flex>
    </Box>
  )
}

module.exports = Luminances

