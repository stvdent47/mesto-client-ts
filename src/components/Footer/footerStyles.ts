import { createUseStyles } from 'react-jss';

const footerStyles = {
  footer: {
    maxWidth: 882,
    width: '100%',
    margin: { top: 0, right: 'auto', bottom: 0, left: 'auto' },
    padding: { top: 0, right: 0, bottom: 60, left: 0 },
  },
  footer__copyright: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#545454',
    margin: 0,
  },
  '@media all and (max-width: 900px)': {
    footer: {
      maxWidth: 'calc(100% - 54px)',
      padding: { top: 0, right: 27, bottom: 60, left: 27 },
    },
  },
  '@media all and (max-width: 650px)': {
    footer: {
      maxWidth: 'calc(100% - 38px)',
      padding: { top: 0, right: 19, bottom: 60, left: 19 },
      margin: 0,
    },
  },
  '@media all and (max-width: 320px)': {
    footer__copyright: {
      fontSize: '14px',
      lineHeight: '17px',
    },
  },
};

export const useStyles = createUseStyles(footerStyles);
