
const React = require('react')
const { withRebass } = require('rebass')

const Input = ({
  name,
  value,
  onChange
}) => {
  return (
    <input
      type='text'
      name={name}
      value={value}
      onChange={onChange}
      className='Input h0 mono'
    />
  )
}

module.exports = withRebass(Input)

