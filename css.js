
module.exports = `
* { box-sizing: border-box }
:root {
  --h0: 3rem;
}
@media screen and (min-width: 40em) {
  :root {
    --h0: 6rem;
  }
}
@media screen and (min-width: 52em) {
  :root {
    --h0: 8rem;
  }
}
@media screen and (min-width: 64em) {
  :root {
    --h0: 12rem;
  }
}
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-family: 'Roboto Mono', Menlo, monospace;
  margin: 0;
  line-height: calc(4/3);
}
a { color: inherit }
.Input {
  font-family: inherit;
  font-size: inherit;
  display: block;
  max-width: 100%;
  border: 0;
  padding: 0;
  color: inherit;
  background-color: transparent;
  appearance: none;
}
.mono { font-family: 'Roboto Mono', Menlo, monospace }
.multiply { mix-blend-mode: multiply }
.h0 { font-size: var(--h0) }
`

