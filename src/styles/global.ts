import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontSize: 10,

    '@sm': {
      fontSize: 16,
    },
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Arial',
    fontWeight: '$regular',
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
    color: '$gray-100',
    textDecoration: 'none',
  },
})
