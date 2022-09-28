import { styled } from '..'

export const Container = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 1168,
  margin: '0 auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: 8,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  '&:hover > footer': {
    transform: 'translateY(0%)',
    opacity: 1,
  },
})

export const ProductFooter = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '2rem',
  borderRadius: 6,
  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 200ms ease-in-out',

  'div > strong': {
    display: 'block',
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '0.25rem',
  },

  'div > span': {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },

  a: {
    padding: '0.75rem',
    borderRadius: 6,
    border: 'none',
    color: '$white',
    backgroundColor: '$green500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
