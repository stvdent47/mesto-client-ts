import { createUseStyles } from 'react-jss';

const navBarStyles = {
  navbar: {},
  navbar__list: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
  },
  'navbar__list-item': {
    color: '#fff',
  },
  navbar__link: {
    color: '#fff',
    textDecoration: 'none',
    margin: { top: 6, left: 24 },
    '&::first-of-type': {
      margin: 0,
    },
  },
  'navbar__link-signout': {
    color: '#a9a9a9',
  },
  '@media all and (min-width: 320px)': {
    navbar__link: {
      fontSize: '14px',
      lineHeight: '17px',
    },
  },
};

export const useStyles = createUseStyles(navBarStyles);
