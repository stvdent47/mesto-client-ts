import React from 'react';
import { Link } from 'react-router-dom';
// jss
import useStyles from '../../styles/loginStyles';
// components
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Register: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.login}>
        <div className='login__containter'>
          <h1 className={classes.login__title}>Регистрация</h1>
          <form className='login__form'>
            <input
              id='email'
              name='email'
              type='email'
              className={classes.login__input}
              placeholder='Email'
              // value={userData.email}
              // onChange={handleInputChange}
            />
            <input
              id='password'
              name='password'
              type='password'
              className={classes.login__input}
              placeholder='Пароль'
              // value={userData.password}
              // onChange={handleInputChange}
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

      {/* <InfoTooltip signupResult={props.signupResult} isOpen={props.isSignupModalOpen} onClose={props.onClose} resultText={props.resultText} /> */}
    </>
  );
};

export default Register;
