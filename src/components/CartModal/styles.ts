import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../styles'

export const Content = styled(Dialog.Content, {
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  minWidth: 480,
  with: '100%',
  height: '100vh',
  padding: '3rem',
  paddingTop: 0,
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    marginTop: '4.5rem',
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: 24,
  right: 24,
  height: 24,
  width: 24,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray500',
})

export const CartContent = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
  justifyContent: 'space-between',
})

export const ProductList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const Product = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: 8,
  width: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },
})

export const ProductContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '0.5rem',

  p: {
    fontSize: '$md',
    color: '$gray300',
  },

  span: {
    fontWeight: 'bold',
    fontSize: '$md',
  },

  button: {
    fontWeight: 'bold',
    border: 'none',
    color: '$green500',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'color 200ms',
  },

  'button:hover': {
    color: '$green300',
  },
})

export const CartFooter = styled('footer', {
  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5rem',
  },

  '> div p': {
    fontSize: '$md',
    color: '$gray300',
  },

  '> div span': {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
  },

  '> div span:nth-child(2)': {
    fontSize: '$xl  ',
  },

  button: {
    width: '100%',
    backgroundColor: '$green500',
    color: '$white',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background-color 200ms',
    marginTop: '3.5rem',
  },

  'button:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  'button:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})
