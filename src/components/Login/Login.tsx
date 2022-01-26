import React from 'react';
// hooks
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useStyles } from './loginStyles';
// constants
import { SIGN_IN_BUTTON, SIGN_IN_TITLE } from '../../constants/text';

type LoginProps = {
  onLogin: (email: string, password: string) => void;
};

export const Login: React.FC<LoginProps> = ({ onLogin }): JSX.Element => {
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
  };

  return (
    <>
      <div className={classes.login}>
        <div className='login__containter'>
          <h1 className={classes.login__title}>{SIGN_IN_TITLE}</h1>
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
            <button type='submit' className={classes.login__button}>
              {SIGN_IN_BUTTON}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
