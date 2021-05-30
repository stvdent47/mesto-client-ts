import React from 'react';
import useStyles from './footerStyles';

const Footer: React.FC = (): JSX.Element => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p className={classes.footer__copyright}>&copy; 2020 Mesto Russia</p>
    </footer>
  );
};

export default Footer;
