import React from 'react';
import useStyles from './footerStyles';

export const Footer: React.FC = React.memo(
  (): JSX.Element => {
    const classes = useStyles();
    return (
      <footer className={classes.footer}>
        <p className={classes.footer__copyright}>&copy; 2020 Mesto Russia</p>
      </footer>
    );
  }
);
