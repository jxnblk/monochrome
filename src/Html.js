
const React = require('react')
const basecss = require('./css')
const twitterCard = require('./twitter-card')

const Html = ({
  app,
  css,
  color
}) => (
  <html lang='en'>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <title>monochrome</title>
    {twitterCard({ hex: '#' + color })}
    <style dangerouslySetInnerHTML={{
      __html: basecss + css
    }} />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto+Mono' />
    <div id='app'
      dangerouslySetInnerHTML={{
        __html: app
      }} />
    <script src='/bundle.js'></script>
    <script
      dangerouslySetInnerHTML={{
        __html: '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");'
      }} />
  </html>
)

module.exports = Html

