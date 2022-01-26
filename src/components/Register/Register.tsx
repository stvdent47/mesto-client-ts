import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// components
import InfoTooltip from '../InfoTooltip/InfoTooltip';
// requests
import { signUp } from '../../lib/requests/signUp';
// hooks
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useStyles } from '../Login/loginStyles';
// constants
import { IS_ALREADY_REGISTERED_TEXT, SIGN_IN_BUTTON, SIGN_UP_BUTTON, SIGN_UP_TITLE } from '../../constants/text';

export const Register: React.FC = React.memo((): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const { values, errors, handleChange, resetForm } = useFormWithValidation();

  const [signUpResult, setSignUpResult] = useState<boolean>(false);
  const [isInfoTooltipOpen, setisInfoTooltipOpen] = useState<boolean>(false);

  const onRegister = async (evt: React.FormEvent) => {
    evt.preventDefault();

    try {
      await signUp(values.registerEmail, values.registerPassword);

      setSignUpResult(true);
      setisInfoTooltipOpen(true);

      resetForm();
    } catch (err) {
      setSignUpResult(false);
      setisInfoTooltipOpen(true);
      console.error({ err });
    }
  };

  const closeInfoTooltipModal = (): void => {
    setisInfoTooltipOpen(false);
    history.push('/sign-in');
  };

  return (
    <>
      <div className={classes.login}>
        <div className='login__containter'>
          <h1 className={classes.login__title}>{SIGN_UP_TITLE}</h1>
          <form onSubmit={onRegister} className={classes.login__form}>
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
              {SIGN_UP_BUTTON}
            </button>
          </form>
        </div>

        <div className='login__button-containter'>
          <div className={classes['login__button-caption']}>
            <span>{IS_ALREADY_REGISTERED_TEXT}</span>
            <Link to='/sign-in' className={classes.login__link}>
              {SIGN_IN_BUTTON}
            </Link>
          </div>
        </div>
      </div>

      <InfoTooltip signUpResult={signUpResult} isOpen={isInfoTooltipOpen} onClose={closeInfoTooltipModal} />
    </>
  );
});
