import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
// components
import { Header } from '../Header/Header';
import { Main } from '../Main';
import ProtectedRoute from '../../hocs/ProtectedRoute';
// types
import { User } from '../../types/UserTypes';
import { initialUser } from '../../constants/default';
// requests
import getCurrentUserInfo from '../../lib/requests/getCurrentUserInfo';
import updateUser from '../../lib/requests/updateUser';
import updateUserAvatar from '../../lib/requests/updateUserAvatar';
import authorize from '../../lib/requests/authorize';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Login } from '../Login/Login';
import Register from '../Register/Register';

export const App: React.FC = (): JSX.Element => {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState<User>(initialUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUpdateUser = (name: string, about: string): void => {
    updateUser(name, about)
      .then((user) => {
        const { name, about } = user;
        setCurrentUser((prevState) => ({ ...prevState, name, about }));
        // closeAllModals();
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateAvatar = (avatarUrl: string, resetFormCb: () => void): void => {
    updateUserAvatar(avatarUrl)
      .then((res) => {
        setCurrentUser((prevState) => ({ ...prevState, avatar: res.avatar }));
        // closeAllModals();
        resetFormCb();
      })
      .catch((err) => console.error(err));
  };

  const handleLogin = (email: string, password: string): void => {
    authorize(email, password)
      .then((user) => {
        const { name, email, avatar, about, id, token } = user;
        if (token) {
          localStorage.setItem('jwt', token);
          setCurrentUser((prevState) => ({
            ...prevState,
            name,
            email,
            avatar,
            about,
            _id: id,
          }));
          tokenCheck();
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSignOut = (): void => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
  };

  const tokenCheck = (): void => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      getCurrentUserInfo(jwt)
        .then((user) => {
          if (user) {
            const { name, email, avatar, about, _id } = user;
            setCurrentUser((prevState) => ({
              ...prevState,
              name,
              email,
              avatar,
              about,
              _id,
            }));
            setIsLoggedIn(true);
            history.push('/feed');
          }
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  // useEffect(() => {
  //   if (isLoggedIn)
  //     getCards()
  //       .then((cards) => {
  //         setCards(cards.reverse());
  //       })
  //       .catch((err) => console.error(err));
  // }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
      <Switch>
        <Route exact path='/sign-in'>
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path='/sign-up'>
          <Register />
        </Route>
        <ProtectedRoute
          path='/feed'
          component={Main}
          isLoggedIn={isLoggedIn}
          // cards={cards}
          // onProfileEdit={handleEditProfileClick}
          // onAvatarEdit={handleEditAvatarClick}
          // onAddPlace={handleAddPlaceClick}
          // onCardClick={handleCardClick}
          handleUpdateUser={handleUpdateUser}
          handleUpdateAvatar={handleUpdateAvatar}
        />
      </Switch>

      {/* <div className='modal remove-card-modal'>
        <div className='modal__container'>
          <h2 className='modal__title modal__title_type_remove'>Вы уверены?</h2>

          <form action='#' name='form-add-modal' className='modal__form' method='POST' noValidate>
            <button type='submit' className='modal__button modal__button_type_remove'>
              Да
            </button>
          </form>

          <button className='modal__close-button' type='button' aria-label='Закрыть'></button>
        </div>
      </div> */}
    </CurrentUserContext.Provider>
  );
};
