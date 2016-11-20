
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
  font-family: 'Roboto Mono', Menlo, monospace;
  margin: 0;
  line-height: calc(4/3);
}

a { color: inherit }

.mono { font-family: 'Roboto Mono', Menlo, monospace }
.h0 { font-size: var(--h0) }
`

