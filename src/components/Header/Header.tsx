import React from 'react';
import './Header.css';

import logo from '../../images/logo.svg';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <img src={logo} alt='логотип место' className='header__logo' />
    </header>
  );
};

export default Header;
