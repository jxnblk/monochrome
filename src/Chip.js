
const React = require('react')
const { Box } = require('axs')

class Chip extends React.Component {
  onClick (e) {
    e.target.select()
  }

  render () {
    const { color } = this.props
    const sx = {
      root: {
        backgroundColor: color
      }
    }

    return (
      <Box
        width={[
          1/3,
          1/5,
          1/10
        ]}
        css={cx.root}
        p1
        style={sx.root}>
        <Box is='label'
          css={cx.label}
          htmlFor={color}>
          Color
        </Box>
        <Box is='input'
          name={color}
          value={color}
          readOnly
          css={cx.input}
          onClick={this.onClick}
        />
      </Box>
    )
  }
}

const cx = {
  root: {
  },
  label: {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)'
  },
  input: {
    fontFamily: 'inherit',
    fontSize: 12,
    textAlign: 'center',
    width: '100%',
    height: 96,
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    opacity: 0,
    transition: 'opacity .1s ease-out',
    ':focus': {
      outline: 'none',
      opacity: 1
    }
  }
}

module.exports = Chip

