import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// jss
import useStyles from '../Login/loginStyles';
// requests
import handleRegister from '../../lib/requests/handleRegister';
// hooks
import useFormWithValidation from '../../hooks/useFormWithValidation';
// components
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Register: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const {
    values,
    setValues,
    errors,
    isFormValid,
    handleChange,
    resetForm,
  } = useFormWithValidation();

  const [signUpResult, setSignUpResult] = useState<boolean>(false);
  const [isInfoTooltipOpen, setisInfoTooltipOpen] = useState<boolean>(false);

  const onRegister = (evt: React.FormEvent): void => {
    evt.preventDefault();

    handleRegister(values.registerEmail, values.registerPassword)
      .then((res) => {
        console.log(res);
        setSignUpResult(true);
        setisInfoTooltipOpen(true);

        resetForm();
      })
      .catch((err) => {
        setSignUpResult(false);
        setisInfoTooltipOpen(true);
        console.error(err);
      });
  };

  const closeInfoTooltipModal = (): void => {
    setisInfoTooltipOpen(false);
    history.push('/sign-in');
  };

  return (
    <>
      <div className={classes.login}>
        <div className='login__containter'>
          <h1 className={classes.login__title}>Регистрация</h1>
          <form className='login__form' onSubmit={onRegister}>
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
              Зарегистрироваться
            </button>
          </form>
        </div>

        <div className='login__button-containter'>
          <div className={classes['login__button-caption']}>
            <span>Уже зарегистрированы?</span>
            <Link to='/sign-in' className={classes.login__link}>
              Войти
            </Link>
          </div>
        </div>
      </div>

      <InfoTooltip
        signUpResult={signUpResult}
        isOpen={isInfoTooltipOpen}
        onClose={closeInfoTooltipModal}
      />
    </>
  );
};

export default Register;
