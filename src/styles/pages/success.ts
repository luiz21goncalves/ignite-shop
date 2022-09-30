import { styled } from '..'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: '4rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4,
  },

  a: {
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    transition: 'color 200ms',
    fontWeight: 'bold',
    textDecoration: 'none',
  },

  'a:hover': {
    color: '$green300',
  },

  '> div': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4rem',
  },
})

export const ImageContainer = styled('div', {
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: '50%',
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '& + &': {
    marginLeft: '-3.25rem',
  },
})
