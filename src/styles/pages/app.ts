import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1168,
  margin: '0 auto',

  div: {
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

  '&::before': {
    content: '1',
    position: 'absolute',
    width: '1.5rem',
    height: '1.5rem',
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
  },
})
