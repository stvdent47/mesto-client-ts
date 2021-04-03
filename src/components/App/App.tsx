import React, { useState, useEffect } from 'react';
// components
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ModalEdit from '../ModalEdit/ModalEdit';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalAvatarUpdate from '../ModalAvatarUpdate/ModalAvatarUpdate';
import ModalWithImage from '../ModalWithImage/ModalWithImage';
// interfaces
import { ICurrentUser, emptyUser } from '../../interfaces/ICurrentUser';
import { ICard, emptyCard } from '../../interfaces/ICard';
// requests
import getCurrentUserInfo from '../../lib/requests/getCurrentUserInfo';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const tempToken: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGJkYjFiMGUyZTEzNDQyOGE2MGUwYSIsImlhdCI6MTYxNjk2OTQ2OSwiZXhwIjoxNjE3NTc0MjY5fQ.7dJ3JwyUMRXb113tLRsidnCN-YKa_Pwesh0Jx15Lydc';
// import './App.css';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<ICurrentUser>(emptyUser);
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

  // const closeModalByEscape = (evt: React.KeyboardEvent): void => {
  //   evt.key === 'Escape' && closeAllModals();
  // };

  // useEffect(() => {
  //   document.addEventListener('keydown', closeModalByEscape);
  //   return () => {
  //     document.removeEventListener('keydown', closeModalByEscape);
  //   };
  // }, []);
  useEffect(() => {
    getCurrentUserInfo(tempToken)
      .then((user) => setCurrentUser(user))
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          onProfileEdit={handleEditProfileClick}
          onAvatarEdit={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <ModalEdit isOpen={isModalEditOpen} onClose={closeAllModals} />
        <ModalAdd isOpen={isModalAddOpen} onClose={closeAllModals} />
        <ModalAvatarUpdate isOpen={isModalAvatarUpdateOpen} onClose={closeAllModals} />
        <ModalWithImage isOpen={isModalWithImageOpen} card={selectedCard} onClose={closeAllModals} />

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
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
