import { createUseStyles } from 'react-jss';

const headerStyles = {
  header: {
    maxWidth: 882,
    width: '100%',
    margin: { top: 0, right: 'auto', bottom: 0, left: 'auto' },
    padding: { top: 45, right: 0, bottom: 0, left: 0 },
    borderBottom: '1px solid rgba(84, 84, 84, 0.7)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header__logo: {
    maxWidth: 142,
    width: '100%',
    padding: { top: 0, right: 0, bottom: 40, left: 0 },
  },
  '@media all and (max-width: 954px)': {
    header: {
      maxWidth: 'calc(100% - 54px)',
      padding: { top: 45, right: 30, bottom: 0, left: 30 },
    },
  },
  '@media all and (max-width: 650px)': {
    header: {
      padding: { top: 28, right: 30, bottom: 0, left: 30 },
    },
  },
  '@media all and (max-width: 320px)': {
    header__logo: {
      maxWidth: 104,
      padding: { top: 0, right: 0, bottom: 32, left: 0 },
    },
  },
};

const useStyles = createUseStyles(headerStyles);

export default useStyles;
