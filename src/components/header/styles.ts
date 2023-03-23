import Link from 'next/link'
import { styled } from '../../styles/theme'

export const HeaderContainer = styled('header', {
  height: '$10',

  display: 'flex',
  justifyContent: 'center',

  backgroundColor: '$white',
  boxShadow: '$header',
})

export const TabContainer = styled('nav', {
  minWidth: 268,
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  borderBottom: 'solid 1px $gray-200',
})

export const TabItem = styled(Link, {
  height: '100%',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: -1,
  padding: '0 $2',

  fontSize: '$sm',

  borderBottom: 'solid 4px transparent',
  borderTop: 'solid 4px transparent',

  variants: {
    selected: {
      true: {
        borderBottomColor: '$black',
      },
    },
  },
})
