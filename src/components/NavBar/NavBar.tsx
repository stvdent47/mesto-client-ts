import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// types
import { User } from '../../types/UserTypes';
// constants
import { SIGN_IN, SIGN_OUT, SIGNING_UP } from '../../constants/buttons';
// styles
import clsx from 'clsx';
import { useStyles } from './navbarStyles';

type NavBarProps = {
  isLoggedIn?: boolean;
  handleSignOut: () => void;
  currentUser: User;
};

export const NavBar = React.memo(({ isLoggedIn, handleSignOut, currentUser }: NavBarProps): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();

  const onSignOut = (): void => {
    localStorage.removeItem('jwt');
    handleSignOut();
  };

  return (
    <nav className={classes.navbar}>
      <ul className={classes['navbar__list']}>
        {isLoggedIn ? (
          <>
            <li className={classes['navbar__list-item']}>{currentUser.email}</li>
            <li className={classes['navbar__list-item']}>
              <Link
                to='/sign-in'
                className={clsx(classes.navbar__link, classes['navbar__link-signout'])}
                onClick={onSignOut}
              >
                {SIGN_OUT}
              </Link>
            </li>
          </>
        ) : location.pathname === '/sign-in' ? (
          <Link to='/sign-up' className={classes.navbar__link}>
            {SIGNING_UP}
          </Link>
        ) : (
          <Link to='/sign-in' className={classes.navbar__link}>
            {SIGN_IN}
          </Link>
        )}
      </ul>
    </nav>
  );
});
