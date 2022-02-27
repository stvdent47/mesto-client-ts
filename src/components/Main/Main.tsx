import React, { useContext, useEffect, useState } from 'react';
import useStyles from './mainStyles';
import './Main.css';
// components
import { Footer } from '../Footer/Footer';
// import { CardComponent } from '../Card/Card';
import { Card as CardComponent } from '../Card';
// types
import { UserDto } from '../../types/UserTypes';
import { initialCard } from '../../constants/default';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import defaultAvatar from '../../images/profile-photo.jpg';
import { Card, CardDto } from '../../types/CardTypes';
import { ModalEdit } from '../ModalEdit/ModalEdit';
import { ModalAdd } from '../ModalAdd';
import { ModalAvatarUpdate } from '../ModalAvatarUpdate/ModalAvatarUpdate';
import { ModalWithImage } from '../ModalWithImage/ModalWithImage';
import { initialOpenedModals } from '../../constants/default';
import { ModalNameTypes } from '../../types/ModalTypes';

interface MainProps {
  isLoggedIn: boolean;

  handleUpdateUser: (name: string, about: string) => void;
  handleUpdateAvatar: () => void;

  cards: Card[];
  fetchCards: () => void;
}

export const Main: React.FC<MainProps> = ({
  isLoggedIn,

  handleUpdateUser,
  handleUpdateAvatar,

  cards,
  fetchCards,
}): JSX.Element => {
  const classes = useStyles();
  const currentUser: UserDto = useContext<UserDto>(CurrentUserContext);

  const [openedModals, setOpenedModals] = useState<Record<ModalNameTypes, boolean>>({ ...initialOpenedModals });
  const [selectedCard, setSelectedCard] = useState<CardDto>(initialCard);

  const handleOpenModal = (modalName: ModalNameTypes) => {
    setOpenedModals((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };
  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
    handleOpenModal('image');
  };
  const closeAllModals = () => {
    setOpenedModals({ ...initialOpenedModals });
    setSelectedCard(initialCard);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchCards();
    }
  }, [isLoggedIn]);

  const closeModalByEscape = (evt: KeyboardEvent): void => {
    evt.key === 'Escape' && closeAllModals();
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalByEscape);
    return () => {
      document.removeEventListener('keydown', closeModalByEscape);
    };
  }, []);

  return (
    <>
      <main className='main'>
        <section className='profile'>
          <div className='profile__photo-container' onClick={() => handleOpenModal('avatar')}>
            <img src={currentUser.avatar || defaultAvatar} alt='фото профиля' className='profile__photo' />
          </div>

          <div className='profile__info'>
            <div className='profile__title'>
              <h1 className='profile__name'>{currentUser.name || '...'}</h1>
              <button
                className='profile__edit-button'
                type='button'
                aria-label='Редактировать'
                onClick={() => handleOpenModal('edit')}
              />
            </div>

            <p className='profile__description'>{currentUser.about || '...'}</p>
          </div>

          <button
            className='profile__add-button'
            type='button'
            aria-label='Добавить'
            onClick={() => handleOpenModal('add')}
          />
        </section>

        <section className='photo-elements'>
          <ul className={classes.photoElements__list}>
            {cards.map((card) => (
              <CardComponent card={card} key={card._id} onCardClick={handleCardClick} />
            ))}
          </ul>
        </section>
      </main>
      <Footer />

      <ModalEdit isOpen={openedModals.edit} onClose={closeAllModals} onUpdateUser={handleUpdateUser} />
      <ModalAdd isOpen={openedModals.add} onClose={closeAllModals} />
      <ModalAvatarUpdate isOpen={openedModals.avatar} onClose={closeAllModals} onAvatarUpdate={handleUpdateAvatar} />
      <ModalWithImage isOpen={openedModals.image} card={selectedCard} onClose={closeAllModals} />
    </>
  );
};
