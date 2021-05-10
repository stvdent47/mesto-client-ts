import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';

import logo from '../../images/logo.svg';

interface HeaderProps {
  isLoggedIn: boolean;
  onSignOut: () => void;
}
const Header: React.FC<HeaderProps> = ({ isLoggedIn, onSignOut }: HeaderProps): JSX.Element => {
  return (
    <header className='header'>
      <img src={logo} alt='логотип место' className='header__logo' />
      <NavBar isLoggedIn={isLoggedIn} onSignOut={onSignOut} />
    </header>
  );
};

export default Header;
