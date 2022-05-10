import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
// components
import { Header } from '../Header';
import { MainPage } from '../MainPage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import ProtectedRoute from '../../hocs/ProtectedRoute';
// types
import { UserActionTypes } from '../../types/UserTypes';
// hooks
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

export const App: React.FC = (): JSX.Element => {
  const { user, isLoggedIn: isLoggedIn } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const history = useHistory();

  const tokenCheck = (): void => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      dispatch({ type: UserActionTypes.FETCH_CURRENT_USER, payload: { jwt } });

      if (user) {
        history.push('/feed');
      }
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/sign-in'>
          <LoginPage />
        </Route>
        <Route exact path='/sign-up'>
          <RegisterPage />
        </Route>
        <ProtectedRoute path='/feed' component={MainPage} isLoggedIn={isLoggedIn} />
      </Switch>
    </>
  );
};
