import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
// components
import Header from '../Header/Header';
import Main from '../Main/Main';
import ModalEdit from '../ModalEdit/ModalEdit';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalAvatarUpdate from '../ModalAvatarUpdate/ModalAvatarUpdate';
import ModalWithImage from '../ModalWithImage/ModalWithImage';
import ProtectedRoute from '../../hocs/ProtectedRoute';
// interfaces
import { ICurrentUser, emptyUser } from '../../interfaces/ICurrentUser';
import { ICard, emptyCard } from '../../interfaces/ICard';
// requests
import getCurrentUserInfo from '../../lib/requests/getCurrentUserInfo';
import updateUser from '../../lib/requests/updateUser';
import updateUserAvatar from '../../lib/requests/updateUserAvatar';
import createCard from '../../lib/requests/createCard';
import getCards from '../../lib/requests/getCards';
import handleLikeClick from '../../lib/requests/handleLikeClick';
import deleteCard from '../../lib/requests/deleteCard';
import authorize from '../../lib/requests/authorize';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Login from '../Login/Login';
import Register from '../Register/Register';

const App: React.FC = (): JSX.Element => {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState<ICurrentUser>(emptyUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState<ICard[]>([]);
  // modal states
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false);
  const [isModalAvatarUpdateOpen, setIsModalAvatarUpdateOpen] = useState<boolean>(false);
  const [isModalWithImageOpen, setIsModalWithImageOpen] = useState<boolean>(false);

  const [selectedCard, setSelectedCard] = useState<ICard>(emptyCard);

  const handleEditProfileClick = (): void => {
    setIsModalEditOpen(true);
  };
  const handleEditAvatarClick = (): void => {
    setIsModalAvatarUpdateOpen(true);
  };
  // JSON.parse(localStorage.getItem('test') || '[]') as string;
  const handleAddPlaceClick = (): void => {
    setIsModalAddOpen(true);
  };
  const handleCardClick = (card: ICard): void => {
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

  const handleAddPlaceSubmit = (name: string, link: string, resetFormCb: () => void): void => {
    createCard(name, link)
      .then((res) => {
        setCards((prevState) => [res, ...prevState]);
        resetFormCb();
        closeAllModals();
      })
      .catch((err) => console.error(err));
  };

  const handleCardLike = (cardId: string, isLiked: boolean): void => {
    handleLikeClick(cardId, isLiked)
      .then((newCard) =>
        setCards((prevState) => prevState.map((card) => (card._id === cardId ? newCard : card)))
      )
      .catch((err) => console.error(err));
  };

  const handleDeleteCard = (cardId: string): void => {
    deleteCard(cardId)
      .then((card) => setCards((prevState) => prevState.filter((item) => item._id !== card._id)))
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

  useEffect(() => {
    if (isLoggedIn)
      getCards()
        .then((cards) => {
          setCards(cards.reverse());
        })
        .catch((err) => console.error(err));
  }, [isLoggedIn]);

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
            cards={cards}
            onProfileEdit={handleEditProfileClick}
            onAvatarEdit={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteCard}
          />
        </Switch>

        <ModalEdit
          isOpen={isModalEditOpen}
          onClose={closeAllModals}
          onUpdateUser={handleUpdateUser}
        />
        <ModalAdd
          isOpen={isModalAddOpen}
          onClose={closeAllModals}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ModalAvatarUpdate
          isOpen={isModalAvatarUpdateOpen}
          onClose={closeAllModals}
          onAvatarUpdate={handleUpdateAvatar}
        />
        <ModalWithImage
          isOpen={isModalWithImageOpen}
          card={selectedCard}
          onClose={closeAllModals}
        />

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

export default App;
