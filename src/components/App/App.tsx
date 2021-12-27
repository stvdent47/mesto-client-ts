import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
// components
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { ModalEdit } from '../ModalEdit/ModalEdit';
import { ModalAdd } from '../ModalAdd/ModalAdd';
import { ModalAvatarUpdate } from '../ModalAvatarUpdate/ModalAvatarUpdate';
import ModalWithImage from '../ModalWithImage/ModalWithImage';
import ProtectedRoute from '../../hocs/ProtectedRoute';
// interfaces
import { ICurrentUser, emptyUser } from '../../interfaces/ICurrentUser';
// requests
import getCurrentUserInfo from '../../lib/requests/getCurrentUserInfo';
import updateUser from '../../lib/requests/updateUser';
import updateUserAvatar from '../../lib/requests/updateUserAvatar';
import authorize from '../../lib/requests/authorize';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { CardType } from '../../types/card';

const emptyCard: CardType = {
  name: '',
  link: '',
  owner: '',
  likes: [],
  createdAt: null,
  _id: '',
};

const App: React.FC = (): JSX.Element => {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState<ICurrentUser>(emptyUser);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // modal states
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false);
  const [isModalAvatarUpdateOpen, setIsModalAvatarUpdateOpen] = useState<boolean>(false);
  const [isModalWithImageOpen, setIsModalWithImageOpen] = useState<boolean>(false);

  const [selectedCard, setSelectedCard] = useState<CardType>(emptyCard);

  const handleEditProfileClick = (): void => {
    setIsModalEditOpen(true);
  };
  const handleEditAvatarClick = (): void => {
    setIsModalAvatarUpdateOpen(true);
  };
  const handleAddPlaceClick = (): void => {
    setIsModalAddOpen(true);
  };
  const handleCardClick = (card: CardType): void => {
    setIsModalWithImageOpen(true);
    setSelectedCard(card);
  };
  const handleModalWithImageClose = (): void => {
    setIsModalWithImageOpen(false);
    setSelectedCard(emptyCard);
  };

  const closeAllModals = (): void => {
    setIsModalEditOpen(false);
    setIsModalAddOpen(false);
    setIsModalAvatarUpdateOpen(false);
    handleModalWithImageClose();
  };

  const handleUpdateUser = (name: string, about: string): void => {
    updateUser(name, about)
      .then((user) => {
        const { name, about } = user;
        setCurrentUser((prevState) => ({ ...prevState, name, about }));
        closeAllModals();
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateAvatar = (avatarUrl: string, resetFormCb: () => void): void => {
    updateUserAvatar(avatarUrl)
      .then((res) => {
        setCurrentUser((prevState) => ({ ...prevState, avatar: res.avatar }));
        closeAllModals();
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

  const closeModalByEscape = (evt: KeyboardEvent): void => {
    evt.key === 'Escape' && closeAllModals();
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModalByEscape);
    return () => {
      document.removeEventListener('keydown', closeModalByEscape);
    };
  }, []);

  useEffect(() => {
    tokenCheck();
  }, []);

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
          onProfileEdit={handleEditProfileClick}
          onAvatarEdit={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Route path='/*'>{isLoggedIn ? <Redirect to='/feed' /> : <Redirect to='/sign-in' />}</Route>
      </Switch>

      <ModalEdit isOpen={isModalEditOpen} onClose={closeAllModals} onUpdateUser={handleUpdateUser} />
      <ModalAdd isOpen={isModalAddOpen} onClose={closeAllModals} />
      <ModalAvatarUpdate
        isOpen={isModalAvatarUpdateOpen}
        onClose={closeAllModals}
        onAvatarUpdate={handleUpdateAvatar}
      />
      <ModalWithImage isOpen={isModalWithImageOpen} card={selectedCard} onClose={closeAllModals} />
    </CurrentUserContext.Provider>
  );
};

export default App;
