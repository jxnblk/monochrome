
const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./App')

const { pathname } = window.location
const [, color ] = pathname.split('/')

ReactDOM.render(<App color={color} />, app)

