import { createUseStyles } from 'react-jss';

const loginStyles = {
  login: {
    maxWidth: 358,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: { left: 'auto', right: 'auto' },
    padding: { top: '60px' },
    color: '#fff',
  },
  login__title: {
    maxWidth: 'min-content',
    fontWeight: 900,
    fontSize: 24,
    lineHeight: '29px',
    margin: { left: 'auto', right: 'auto' },
    padding: { bottom: 50 },
  },
  login__input: {
    width: 358,
    padding: { bottom: 13 },
    margin: { bottom: 30 },
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    borderBottom: '#fff 1px solid',
    fontSize: 14,
    lineHeight: '17px',
    outline: 'none',
    '&::placeholder': {
      color: '#ccc',
    },
  },
  login__button: {
    backgroundColor: '#fff',
    width: 358,
    height: 50,
    border: 'none',
    margin: 0,
    fontSize: 18,
    lineHeight: '22px',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.85,
    },
  },
  'login__button-caption': {
    display: 'flex',
    justifyContent: 'center',
    padding: { top: 15, bottom: 50 },
  },
  login__link: {
    color: '#fff',
    textDecoration: 'none',
    display: 'inline',
    margin: { left: 5 },
    width: 'min-content',
    height: 'min-content',
    '&:hover': {
      opacity: 0.6,
    },
  },
};

const useStyles = createUseStyles(loginStyles);

export default useStyles;
// export default loginStyles;
