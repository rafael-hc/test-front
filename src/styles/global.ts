import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray-100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Arial',
    fontWeight: '$regular',
    '&:focus': {
      outline: 0,
      // boxShadow: '0 0 0 2px $purple-100'
    },
  },

  button: {
    background: 'transparent',
    border: 'none',
    lineHeight: 0,
  },
  li: {
    listStyle: 'none',
  },

  a: {
    color: '$black',
    textDecoration: 'none',
  },
})
