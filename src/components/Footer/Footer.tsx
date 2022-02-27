import React from 'react';
import { FOOTER_TEXT } from '../../constants/text';
import { useStyles } from './footerStyles';

export const Footer: React.FC = React.memo((): JSX.Element => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p className={classes.footer__copyright}>{FOOTER_TEXT}</p>
    </footer>
  );
});
