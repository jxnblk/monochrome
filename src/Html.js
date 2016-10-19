
const React = require('react')
const css = require('../css')
const twitterCard = require('./twitter-card')

const Html = ({
  app,
  color
}) => (
  <html lang='en'>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <title>monochrome</title>
    {twitterCard({ hex: '#' + color })}
    <style dangerouslySetInnerHTML={{
      __html: css
    }} />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto+Mono' />
    <div id='app'
      dangerouslySetInnerHTML={{
        __html: app
      }} />
    <script src='/bundle.js'></script>
  </html>
)

module.exports = Html

