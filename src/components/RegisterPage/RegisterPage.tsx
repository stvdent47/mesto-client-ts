import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// components
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';
// hooks
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
// constants
import { SIGN_IN, SIGN_UP } from '../../constants/buttons';
// styles
import { useStyles } from '../LoginPage/loginPageStyles';

type RegisterPageProps = {
  register?: (email: string, password: string) => void;
};

export const RegisterPage = ({ register }: RegisterPageProps): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const {
    values,
    // setValues,
    errors,
    // isFormValid,
    handleChange,
    resetForm,
  } = useFormWithValidation();

  const [signUpResult, setSignUpResult] = useState<boolean>(false);
  const [isInfoTooltipOpen, setisInfoTooltipOpen] = useState<boolean>(false);

  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    try {
      register?.(values.registerEmail, values.registerPassword);
      setSignUpResult(true);
      setisInfoTooltipOpen(true);
      resetForm();
    } catch (err) {
      // TODO: complete error register
      console.log({ err });
      setSignUpResult(false);
    }
  };

  const closeInfoTooltipModal = (): void => {
    setisInfoTooltipOpen(false);

    if (signUpResult) history.push('/sign-in');
  };

  return (
    <>
      <div className={classes.login}>
        <div className='login__containter'>
          <h1 className={classes.login__title}>Регистрация</h1>
          <form onSubmit={onSubmit} className={classes.login__form}>
            <input
              id='email'
              name='registerEmail'
              type='email'
              className={classes.login__input}
              placeholder='Email'
              value={values.registerEmail || ''}
              onChange={handleChange}
            />
            <p className={classes.login__inputError}>{errors.registerEmail}</p>
            <input
              id='password'
              name='registerPassword'
              type='password'
              className={classes.login__input}
              placeholder='Пароль'
              value={values.registerPassword || ''}
              onChange={handleChange}
            />

            <button type='submit' className={classes.login__button}>
              {SIGN_UP}
            </button>
          </form>
        </div>

        <div className='login__button-containter'>
          <div className={classes['login__button-caption']}>
            <span>Уже зарегистрированы?</span>
            <Link to='/sign-in' className={classes.login__link}>
              {SIGN_IN}
            </Link>
          </div>
        </div>
      </div>

      <InfoTooltip signUpResult={signUpResult} isOpen={isInfoTooltipOpen} onClose={closeInfoTooltipModal} />
    </>
  );
};
