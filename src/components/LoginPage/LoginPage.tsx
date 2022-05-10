import React from 'react';
// styles
import { useStyles } from './loginPageStyles';
// hooks
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
// constants
import { SIGN_IN } from '../../constants/buttons';

type LoginPageProps = {
  login?: (email: string, password: string) => void;
};

export const LoginPage = React.memo(({ login }: LoginPageProps): JSX.Element => {
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

    login?.(values.loginEmail, values.loginPassword);
    // resetForm();
  };

  return (
    <>
      <div className={classes.login}>
        <div className='login__containter'>
          <h1 className={classes.login__title}>Вход</h1>
          <form onSubmit={handleSubmit} className={classes.login__form}>
            <input
              type='email'
              name='loginEmail'
              className={classes.login__input}
              placeholder='Email'
              value={values.loginEmail || ''}
              onChange={handleChange}
            />
            <input
              type='password'
              name='loginPassword'
              className={classes.login__input}
              placeholder='Пароль'
              value={values.loginPassword || ''}
              onChange={handleChange}
            />
            <button type='submit' className={classes.login__button}>
              {SIGN_IN}
            </button>
          </form>
        </div>
      </div>
    </>
  );
});
