
const React = require('react')

const Footer = () => {
  const sx = {
    root: {
      fontSize: 14,
      padding: 48
    }
  }

  return (
    <footer style={sx.root}>
      <a href='http://jxnblk.com'>Made by Jxnblk</a>
    </footer>
  )
}

module.exports = Footer

