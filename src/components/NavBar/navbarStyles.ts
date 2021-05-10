import { createUseStyles } from 'react-jss';

const navBarStyles = {
  navbar: {},
  navbar__list: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  'navbar__list-item': {
    color: '#fff',
  },
  navbar__link: {
    color: '#fff',
    textDecoration: 'none',
    margin: { left: 24 },
    '&::first-of-type': {
      margin: 0,
    },
  },
  'navbar__link-signout': {
    color: '#a9a9a9',
  },
};

const useStyles = createUseStyles(navBarStyles);

export default useStyles;
