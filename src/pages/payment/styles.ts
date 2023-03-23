import { styled } from '../../styles/theme'

export const PaymentContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  margin: '$5 $2',
  padding: '$6 $2',

  borderRadius: '$xs',
  border: 'solid 1px $gray-200',

  backgroundColor: '$white',
})

export const PaymentForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',

    fontSize: '$sm',
    lineHeight: '$base',
  },
})

export const Title = styled('h2', {
  fontSize: '$xl',
  fontWeight: '$regular',
  lineHeight: '$tall',
})

export const Input = styled('input', {
  borderRadius: '$xs',
  border: '1px solid $gray-200',
  padding: '0.875rem',

  variants: {
    hasError: {
      true: {
        border: '1px solid $danger',
      },
    },
  },
})

export const InputError = styled('span', {
  color: '$danger',
})
