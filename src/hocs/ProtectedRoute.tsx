import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
  component: any;
  isLoggedIn: boolean;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps | any> = ({
  component: Component,
  isLoggedIn,
  path,
  ...rest
}: ProtectedRouteProps) => {
  const props = {
    ...rest,
    isLoggedIn,
  };

  return (
    <Route exact path={path}>
      {() => (isLoggedIn ? <Component {...props} /> : <Redirect to='/sign-in' />)}
    </Route>
  );
};

export default ProtectedRoute;
