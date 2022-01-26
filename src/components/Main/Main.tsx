import React, { useEffect, useState } from 'react';
// components
import { Card } from '../Card/Card';
import { Footer } from '../Footer/Footer';
import { ModalAdd } from '../ModalAdd/ModalAdd';
import { ModalAvatarUpdate } from '../ModalAvatarUpdate/ModalAvatarUpdate';
import { ModalEdit } from '../ModalEdit/ModalEdit';
import { ModalWithImage } from '../ModalWithImage/ModalWithImage';
// hooks
import { useActions } from '../../hooks/useActions';
import { useStyles } from './mainStyles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// types
import { CardType } from '../../types/card';
import { OpenedModalsState } from '../../types/modals';
// constants
import { allModalsClosed, emptyCard } from '../../constants/vars';
// etc
import defaultAvatar from '../../images/profile-photo.jpg';

export const Main: React.FC = (): JSX.Element => {
  const classes = useStyles();

  const { fetchCards } = useActions();

  const {
    cards: { cards },
    user: { user, isLoggedIn },
  } = useTypedSelector((state) => state);

  const [openedModals, setOpenedModals] = useState<OpenedModalsState>(allModalsClosed);
  const [selectedCard, setSelectedCard] = useState<CardType>(emptyCard);

  const handleEditProfileClick = (): void => {
    setOpenedModals((prevState) => ({
      ...prevState,
      userUpdate: true,
    }));
  };

  const handleEditAvatarClick = (): void => {
    setOpenedModals((prevState) => ({
      ...prevState,
      userUpdateAvatar: true,
    }));
  };

  const handleAddPlaceClick = (): void => {
    setOpenedModals((prevState) => ({
      ...prevState,
      addPlace: true,
    }));
  };

  const handleCardClick = (card: CardType): void => {
    setOpenedModals((prevState) => ({
      ...prevState,
      placeImage: true,
    }));
    setSelectedCard(card);
  };
  const handleModalWithImageClose = (): void => {
    closeAllModals();
    setSelectedCard(emptyCard);
  };

  const closeAllModals = (): void => {
    setOpenedModals(allModalsClosed);
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
      <main className={classes.main}>
        {/* TODO — separate component */}
        <section className={classes.profile}>
          <div className={classes.profile__photoContainer} onClick={handleEditAvatarClick}>
            <img src={user.avatar || defaultAvatar} alt='фото профиля' className={classes.profile__photo} />
          </div>

          <div className={classes.profile__info}>
            <div className={classes.profile__title}>
              <h1 className={classes.profile__name}>{user.name || '...'}</h1>
              <button
                className={classes.profile__editButton}
                type='button'
                aria-label='Редактировать'
                onClick={handleEditProfileClick}
              />
            </div>

            <p className={classes.profile__description}>{user.about || '...'}</p>
          </div>

          <button
            className={classes.profile__addButton}
            type='button'
            aria-label='Добавить'
            onClick={handleAddPlaceClick}
          />
        </section>
        {/* TODO — separate component */}
        <section className={classes.photoElements}>
          <ul className={classes.photoElements__list}>
            {cards.map((card: CardType) => (
              <Card card={card} key={card._id} onCardClick={handleCardClick} />
            ))}
          </ul>
        </section>
      </main>
      <Footer />

      <ModalEdit isOpen={openedModals.userUpdate} closeModal={closeAllModals} />
      <ModalAvatarUpdate isOpen={openedModals.userUpdateAvatar} closeModal={closeAllModals} />
      <ModalAdd isOpen={openedModals.addPlace} onClose={closeAllModals} />

      <ModalWithImage isOpen={openedModals.placeImage} card={selectedCard} onClose={handleModalWithImageClose} />
    </>
  );
};
