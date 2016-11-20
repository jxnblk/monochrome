
const React = require('react')
const { Box } = require('axs')

const Footer = ({
  color
}) => {
  const cx = {
    root: {
      fontSize: 14,
      padding: 48
    }
  }

  return (
    <Box is='footer' css={cx.root}>
      <ul>
        <li>
          <a href={`/${color}.json`}>JSON</a>
        </li>
        <li>
          <a href={`/${color}.css`}>CSS</a>
        </li>
        <li>
          <a href='http://jxnblk.com'>Made by Jxnblk</a>
        </li>
      </ul>
    </Box>
  )
}

module.exports = Footer

