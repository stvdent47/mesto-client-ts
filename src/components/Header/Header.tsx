import React from 'react';
import useStyles from './headerStyles';
import NavBar from '../NavBar/NavBar';

import logo from '../../images/logo.svg';

interface HeaderProps {
  isLoggedIn: boolean;
  onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onSignOut }): JSX.Element => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <img src={logo} alt='логотип место' className={classes.header__logo} />
      <NavBar isLoggedIn={isLoggedIn} onSignOut={onSignOut} />
    </header>
  );
};

export default Header;
