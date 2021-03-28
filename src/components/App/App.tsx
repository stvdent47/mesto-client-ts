import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ICard } from '../interfaces';
import Main from '../Main/Main';
import ModalEdit from '../ModalEdit/ModalEdit';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalAvatarUpdate from '../ModalAvatarUpdate/ModalAvatarUpdate';
import ModalWithImage from '../ModalWithImage/ModalWithImage';
import getCards from '../../lib/requests/getCards';

const tempToken: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGJkYjFiMGUyZTEzNDQyOGE2MGUwYSIsImlhdCI6MTYxNjk2OTQ2OSwiZXhwIjoxNjE3NTc0MjY5fQ.7dJ3JwyUMRXb113tLRsidnCN-YKa_Pwesh0Jx15Lydc';
// import './App.css';
const App: React.FC = () => {
  // modal states
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState<boolean>(false);
  const [isModalAvatarUpdateOpen, setIsModalAvatarUpdateOpen] = useState<boolean>(false);

  const [cards, setCards] = useState<ICard[]>([]);

  const handleEditProfileClick = (): void => {
    setIsModalEditOpen(true);
  };
  const handleEditAvatarClick = (): void => {
    setIsModalAvatarUpdateOpen(true);
  };

  const handleAddPlaceClick = (): void => {
    setIsModalAddOpen(true);
  };

  const closeAllModals = (): void => {
    setIsModalEditOpen(false);
    setIsModalAddOpen(false);
    setIsModalAvatarUpdateOpen(false);
  };

  // const closeModalByEscape = (evt: React.KeyboardEvent): void => {
  //   evt.key === 'Escape' && closeAllModals();
  // };

  // useEffect(() => {
  //   this.addEventListener('keydown', closeModalByEscape);
  //   return () => {
  //     document.removeEventListener('keydown', closeModalByEscape);
  //   };
  // }, []);
  useEffect(() => {
    getCards(tempToken)
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {console.log(cards)}, [cards])
  return (
    <div className='page'>
      <Header />
      <Main
        onProfileEdit={handleEditProfileClick}
        onAvatarEdit={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        cards={cards}
      />
      <Footer />

      <ModalEdit isOpen={isModalEditOpen} onClose={closeAllModals} />
      <ModalAdd isOpen={isModalAddOpen} onClose={closeAllModals} />
      <ModalAvatarUpdate isOpen={isModalAvatarUpdateOpen} onClose={closeAllModals} />
      <ModalWithImage />

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
  );
};

export default App;
