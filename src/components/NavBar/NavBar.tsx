import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
// hooks
import { useActions } from '../../hooks/useActions';
import { useStyles } from './navbarStyles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// constants
import { JWT_TOKEN_KEY } from '../../constants/defaults';
import { SIGN_IN_BUTTON, SIGN_OUT_BUTTON, SIGN_UP_BUTTON } from '../../constants/text';

export const NavBar: React.FC = React.memo((): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();

  const { user, isLoggedIn } = useTypedSelector((state) => state.user);
  const { setIsLoggedIn } = useActions();

  const handleSignOut = (): void => {
    localStorage.removeItem(JWT_TOKEN_KEY);
    setIsLoggedIn(false);
  };

  return (
    <nav className={classes.navbar}>
      <ul className={classes['navbar__list']}>
        {isLoggedIn && (
          <>
            <li className={classes['navbar__list-item']}>{user.email}</li>
            <li className={classes['navbar__list-item']}>
              <Link
                to='/sign-in'
                className={clsx(classes.navbar__link, classes['navbar__link-signout'])}
                onClick={handleSignOut}
              >
                {SIGN_OUT_BUTTON}
              </Link>
            </li>
          </>
        )}
        {!isLoggedIn && location.pathname === '/sign-in' && (
          <Link to='/sign-up' className={classes.navbar__link}>
            {SIGN_UP_BUTTON}
          </Link>
        )}
        {!isLoggedIn && location.pathname === '/sign-up' && (
          <Link to='/sign-in' className={classes.navbar__link}>
            {SIGN_IN_BUTTON}
          </Link>
        )}
      </ul>
    </nav>
  );
});
