import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, globalCss, getCssText } = createStitches({
  media: {
    sm: '(min-width: 480px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'gray-100': '#F5F5F5',
      'gray-200': '#CCCCCC',
      'gray-300': '#9B9B9B',
      'gray-400': '#878787',
      purple: '#9222DC',
      danger: '#DE1616',
    },
    shadows: {
      header: `0px 2px 4px rgba(0,0,0,0.1)`,
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1,375',
    },
    fonts: {
      default: 'Arial, sans-serif',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },
    radii: {
      xs: '4px',
    },
    fontWeights: {
      regular: '400',
      bold: '700',
    },
    lineHeights: {
      base: '16px',
      'l-tall': '20px',
      tall: '24px',
    },
  },
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
})
