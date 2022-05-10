// redux
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux';
// components
import { RegisterPage as RegisterPageView } from './RegisterPage';
// types
import { UserActionTypes } from '../../types/UserTypes';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  register: (email: string, password: string) =>
    dispatch({ type: UserActionTypes.REGISTER_USER, payload: { email, password } }),
});

export const RegisterPage = connect(null, mapDispatchToProps)(RegisterPageView);
