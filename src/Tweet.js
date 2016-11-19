
const React = require('react')

class TweetButton extends React.Component {
  componentDidMount () {
    const script = document.createElement('script')
    script.id = 'twitter-wjs'
    script.src = '//platform.twitter.com/widgets.js'
    this.root.appendChild(script)
  }

  render () {

    return (
      <div
        {...this.props}
        ref={r => { this.root = r }}
        style={{ height: 20 }}>
        <a
          ref={r => { this.link = r }}
          href="https://twitter.com/share"
          className="twitter-share-button"
          data-text='Monochrome color palettes'
          data-via='jxnblk'
          children='Tweet' />
      </div>
    )
  }
}

module.exports = TweetButton


