import { styled } from '../../styles/theme'

export const CardContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  p: {
    fontSize: '$xs',
    lineHeight: '$base',
  },
})

export const Price = styled('span', {
  display: 'block',
  fontSize: '$sm',
  fontWeight: '$bold',

  variants: {
    hasDiscount: {
      true: {
        fontWeight: '$regular',
        textDecoration: 'line-through',
        color: '$gray-300',
        marginBottom: '$1',
      },
    },
  },
})
