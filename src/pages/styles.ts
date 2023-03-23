import { styled } from '../styles/theme'

export const BagContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  margin: '$5 $2',
  padding: '$6 $2',

  borderRadius: '$xs',
  border: 'solid 1px $gray-200',

  backgroundColor: '$white',
})
