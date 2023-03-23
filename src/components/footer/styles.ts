import { styled } from '../../styles/theme'

export const FooterContainer = styled('footer', {
  width: '100vw',
  backgroundColor: '$white',
  padding: '$7 $5',
})

export const OrderSpecification = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  marginBottom: '$6',
})

export const ItemSpecification = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$sm',

  variants: {
    isSubtotal: {
      true: {
        fontSize: '$md',
        fontWeight: '$bold',
      },
    },
  },
})

export const Discount = styled('span', {
  fontWeight: '$bold',
  color: '$purple-100',
})
