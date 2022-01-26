import React from 'react';
// components
import { NavBar } from '../NavBar/NavBar';
// hooks
import useStyles from './headerStyles';

import logo from '../../images/logo.svg';

export const Header: React.FC = React.memo((): JSX.Element => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <img src={logo} alt='логотип место' className={classes.header__logo} />
      <NavBar />
    </header>
  );
});
