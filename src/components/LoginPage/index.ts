// redux
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
// components
import { LoginPage as LoginPageView } from './LoginPage';
// types
import { UserActionTypes } from '../../types/UserTypes';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  login: (email: string, password: string) =>
    dispatch({ type: UserActionTypes.LOGIN_USER, payload: { email, password } }),
});

export const LoginPage = connect(null, mapDispatchToProps)(LoginPageView);
