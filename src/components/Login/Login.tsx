import React from 'react';
// jss
import useStyles from './loginStyles';
// hooks
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { SIGN_IN_BUTTON_TEXT, SIGN_IN_TITLE_TEXT } from '../../utils/constants';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }): JSX.Element => {
  const classes = useStyles();

  const {
    values,
    // setValues,
    // errors,
    // isFormValid,
    handleChange,
    // resetForm,
  } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!values.loginEmail || !values.loginPassword) return;

    onLogin(values.loginEmail, values.loginPassword);

    // resetForm();
  };

  return (
    <>
      <div className={classes.login}>
        <div className='login__containter'>
          <h1 className={classes.login__title}>{SIGN_IN_TITLE_TEXT}</h1>
          <form onSubmit={handleSubmit} className={classes.login__form}>
            <input
              type='email'
              name='loginEmail'
              className={classes.login__input}
              placeholder='Email'
              value={values.loginEmail}
              onChange={handleChange}
            />
            <input
              type='password'
              name='loginPassword'
              className={classes.login__input}
              placeholder='Пароль'
              value={values.loginPassword}
              onChange={handleChange}
            />
            {/* <div> */}
            <button type='submit' className={classes.login__button}>
              {SIGN_IN_BUTTON_TEXT}
            </button>
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
