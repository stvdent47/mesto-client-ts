import React from 'react';
// jss
import useStyles from '../../styles/loginStyles';

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.login}>
        <div className='login__containter'>
          <h1 className={classes.login__title}>Вход</h1>
          <form>
            <input
              type='email'
              name='email'
              className={classes.login__input}
              placeholder='Email'
              // value={userData.email}
              // onChange={handleInputChange}
            />
            <input
              type='password'
              name='password'
              className={classes.login__input}
              placeholder='Пароль'
              // value={userData.password}
              // onChange={handleInputChange}
            />
            {/* <div> */}
            <button type='submit' className={classes.login__button}>
              Войти
            </button>
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
