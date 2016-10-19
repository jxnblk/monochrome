
const React = require('react')
const chroma = require('chroma-js')
const Main = require('./Main')
const Footer = require('./Footer')
const rebassConfig = require('./rebass-config')

const { toHex, toHsl, isDark } = require('./utils')

class App extends React.Component {
  constructor ({ color }) {
    super()
    color = color && color.length ? color : '007ce0'
    const [ h, s, l ] = chroma(color).hsl()
    this.state = {
      h: h || 0,
      s,
      l,
      hex: '#' + color
    }
    this.handleHexChange = this.handleHexChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateUrl = this.updateUrl.bind(this)
  }

  getChildContext () {
    return {
      rebass: rebassConfig
    }
  }

  handleHexChange (hex) {
    const hsl = toHsl(hex)
    if (!hsl) {
      this.setState({ hex })
      return
    }

    const [ h, s, l ] = hsl

    this.setState({ hex, h, s, l }, () => {
      this.updateUrl()
    })
  }

  handleChange (e) {
    const { name, value } = e.target
    const num = parseFloat(value)
    const val = isNaN(num) ? value : num
    this.setState({ [name]: val }, () => {
      const { h, s, l } = this.state
      const hex = toHex([ h, s, l ])
      this.setState({ hex }, () => {
        this.updateUrl()
      })
    })
  }

  updateUrl () {
    const path = this.state.hex.replace(/^#/, '')
    history.pushState(this.state, path, '/' + path)
  }

  render () {
    const { color } = this.props
    const { h, s, l } = this.state

    const hex = toHex([ h, s, l ])
    const sx = {
      root: {
        color: isDark(hex) ? '#fff' : '#000',
        backgroundColor: hex
      }
    }

    return (
      <div style={sx.root}>
        <Main
          {...this.state}
          value={hex}
          onChange={this.handleChange}
          onHexChange={this.handleHexChange}
        />
        <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  rebass: React.PropTypes.object
}

module.exports = App

