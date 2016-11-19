
const React = require('react')
const { Box } = require('axs')

const Footer = () => {
  const cx = {
    root: {
      fontSize: 14,
      padding: 48
    }
  }

  return (
    <Box is='footer' css={cx.root}>
      <a href='http://jxnblk.com'>Made by Jxnblk</a>
    </Box>
  )
}

module.exports = Footer

