
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
.Slider input:focus {
  background-color: currentcolor !important;
  outline: none;
}
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
  outline: none;
}
.Input:focus {
}
.Chip label {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
.Chip input {
  font-family: inherit;
  font-size: 12;
  text-align: center;
  width: 100%;
  height: 100%;
  color: inherit;
  background-color: transparent;
  border: 0;
  appearance: none;
  opacity: 0;
  transition: opacity .1s ease-out;
}
.Chip input:focus {
  outline: none;
  opacity: 1;
}
.mono { font-family: 'Roboto Mono', Menlo, monospace }
.multiply { mix-blend-mode: multiply }
.h0 { font-size: var(--h0) }
`

