import { styled } from '../../styles/theme'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$xs',
  fontSize: '$lg',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '$4 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  transition: 'all 600ms',
  svg: {
    width: '$4',
    height: '$4',
  },
  '&:disabled, &[aria-disabled=true]': {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$purple',
        '&:not(:disabled):hover': {
          filter: '0.1',
        },
        '&:disabled, &[aria-disabled=true]': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$white',
        backgroundColor: '$black',
        '&:not(:disabled):hover': {
          filter: '0.1',
        },
      },
    },
    'w-full': {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
  '@sm': {
    fontSize: '$md',
  },
})
