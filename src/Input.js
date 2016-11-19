
const React = require('react')
const { Box } = require('axs')

const Input = ({
  name,
  value,
  onChange
}) => (
  <Box
    is='input'
    type='text'
    name={name}
    value={value}
    onChange={onChange}
    className='xInput h0 mono'
    css={cx}
  />
)

const cx = {
  fontFamily: 'inherit',
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  border: 0,
  padding: 0,
  color: 'inherit',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  outline: 'none'
}

module.exports = Input

