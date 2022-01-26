import React, { useCallback, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
// components
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { ProtectedRoute } from '../../hocs/ProtectedRoute';
// hooks
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// constants
import { JWT_TOKEN_KEY } from '../../constants/defaults';

const App: React.FC = (): JSX.Element => {
  const history = useHistory();

  const { user, isLoggedIn } = useTypedSelector((state) => state.user);
  const { getCurrentUser, setIsLoggedIn, signIn } = useActions();

  const tokenCheck = () => {
    const jwt = localStorage.getItem(JWT_TOKEN_KEY);

    if (jwt) {
      getCurrentUser(jwt);

      if (user) {
        setIsLoggedIn(true);
        history.push('/feed');
      }
    }
  };

  const handleLogin = useCallback(async (email: string, password: string) => {
    await signIn(email, password);
    tokenCheck();
  }, []);

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/sign-in'>
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path='/sign-up'>
          <Register />
        </Route>
        <ProtectedRoute path='/feed' component={Main} isLoggedIn={isLoggedIn} />
        <Route path='/*'>{isLoggedIn ? <Redirect to='/feed' /> : <Redirect to='/sign-in' />}</Route>
      </Switch>
    </>
  );
};

export default App;
