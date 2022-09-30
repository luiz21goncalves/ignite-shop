import { styled } from '../../styles'

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1168,
  margin: '0 auto',

  '> div': {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const CartButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  color: '$gray500',
  backgroundColor: '$gray800',
  borderRadius: 8,
  transition: 'all 200ms',
  position: 'relative',
  border: 'none',

  '&:hover': {
    opacity: 0.7,
  },
})

export const Label = styled('div', {
  content: 'attr(data-amount)',
  position: 'absolute',
  width: 24,
  height: 24,
  lineHeight: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  top: '-0.75rem',
  right: '-0.75rem',
  backgroundColor: '$green300',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'bold',
  outline: '3px solid $gray900',
})
