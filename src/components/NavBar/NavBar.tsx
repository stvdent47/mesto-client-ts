import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
// styles
import clsx from 'clsx';
import { useStyles } from './navbarStyles';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { UserDto } from '../../types/UserTypes';

interface NavBarProps {
  isLoggedIn: boolean;
  onSignOut: () => void;
}

export const NavBar: React.FC<NavBarProps> = React.memo(({ isLoggedIn, onSignOut }): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();

  const currentUser: UserDto = useContext<UserDto>(CurrentUserContext);

  return (
    <nav className={classes.navbar}>
      <ul className={classes['navbar__list']}>
        {isLoggedIn && (
          <>
            <li className={classes['navbar__list-item']}>{currentUser.email}</li>
            <li className={classes['navbar__list-item']}>
              <Link
                to='/sign-in'
                className={clsx(classes.navbar__link, classes['navbar__link-signout'])}
                onClick={onSignOut}
              >
                Выйти
              </Link>
            </li>
          </>
        )}
        {!isLoggedIn && location.pathname === '/sign-in' && (
          <Link to='/sign-up' className={classes.navbar__link}>
            Регистрация
          </Link>
        )}
        {!isLoggedIn && location.pathname === '/sign-up' && (
          <Link to='/sign-in' className={classes.navbar__link}>
            Войти
          </Link>
        )}
      </ul>
    </nav>
  );
});
