import env from 'react-dotenv';
import React, { useState, useContext, useEffect } from 'react';
import './Main.css';
// components
import { Card } from '../Card/Card';
// interfaces
import { ICurrentUser } from '../../interfaces/ICurrentUser';
import { ICard } from '../../interfaces/ICard';
// requests
import getCards from '../../lib/requests/getCards';
import handleLikeClick from '../../lib/requests/handleLikeClick';
import deleteCard from '../../lib/requests/deleteCard';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import defaultAvatar from '../../images/profile-photo.jpg';

const { TEMP_TOKEN } = env;

interface MainProps {
  onProfileEdit: () => void;
  onAvatarEdit: () => void;
  onAddPlace: () => void;
  onCardClick: (card: ICard) => void;
}

const Main: React.FC<MainProps> = ({ onProfileEdit, onAvatarEdit, onAddPlace, onCardClick }) => {
  const currentUser: ICurrentUser = useContext<ICurrentUser>(CurrentUserContext);
  const [cards, setCards] = useState<ICard[]>([]);

  const handleCardLike = (cardId: string, isLiked: boolean): void => {
    handleLikeClick(cardId, isLiked)
      .then((newCard) => setCards((prevState) => prevState.map((card) => (card._id === cardId ? newCard : card))))
      .catch((err) => console.error(err));
  };

  const handleDeleteCard = (cardId: string): void => {
    deleteCard(cardId)
      .then((card) => setCards((prevState) => prevState.filter((item) => item._id !== card._id)))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCards(TEMP_TOKEN)
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__photo-container' onClick={onAvatarEdit}>
          <img src={currentUser.avatar || defaultAvatar} alt='фото профиля' className='profile__photo' />
        </div>

        <div className='profile__info'>
          <div className='profile__title'>
            <h1 className='profile__name'>{currentUser.name || '...'}</h1>
            <button className='profile__edit-button' type='button' aria-label='Редактировать' onClick={onProfileEdit} />
          </div>

          <p className='profile__description'>{currentUser.about || '...'}</p>
        </div>

        <button className='profile__add-button' type='button' aria-label='Добавить' onClick={onAddPlace} />
      </section>

      <section className='photo-elements'>
        <ul className='photo-elements__list'>
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onLikeClick={handleCardLike}
              onCardDelete={handleDeleteCard}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
