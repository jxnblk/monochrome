
const React = require('react')
const chroma = require('chroma-js')
const { Flex, Box } = require('reflexbox')

const spread = start => length => (
  Array.from({ length })
    .map((n, i) => {
      const val = start + 1 / length * (i + 1)
      if (val > 1) {
        return val - 1
      }
      return val
    })
    .sort()
)

class Chip extends React.Component {
  onClick (e) {
    e.target.select()
  }

  render () {
    const { color } = this.props
    const sx = {
      root: {
        width: 64,
        height: 96,
        backgroundColor: color
      },
      input: {}
    }

    return (
      <Box auto
        className='Chip'
        m={1}
        style={sx.root}>
        <label htmlFor={color}>Color</label>
        <input
          name={color}
          value={color}
          readOnly
          style={sx.input}
          onClick={this.onClick}
        />
      </Box>
    )
  }
}

const Matrix = ({
  h, s, l
}) => {
  const grid = spread(l)(8).map(l => {
    return spread(s)(8).map(s => chroma.hsl([h, s, l]).hex())
  })

  const sx = {
    padding: 48
  }

  return (
    <div style={sx}>
      {grid.map((sats, i) => (
        <Flex key={i} mx={-1} wrap>
          {sats.map((hex, j) => (
            <Chip key={j} color={hex} />
          ))}
        </Flex>
      ))}
    </div>
  )
}

module.exports = Matrix

