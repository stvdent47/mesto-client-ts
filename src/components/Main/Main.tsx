import React, { useContext } from 'react';
import './Main.css';
// components
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
// interfaces
import { ICurrentUser } from '../../interfaces/ICurrentUser';
import { ICard } from '../../interfaces/ICard';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import defaultAvatar from '../../images/profile-photo.jpg';

interface MainProps {
  cards: ICard[];
  onProfileEdit: () => void;
  onAvatarEdit: () => void;
  onAddPlace: () => void;
  onCardClick: (card: ICard) => void;
  onCardLike: (cardId: string, isLiked: boolean) => void;
  onCardDelete: (cardId: string) => void;
}

const Main: React.FC<MainProps> = ({
  cards,
  onProfileEdit,
  onAvatarEdit,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
}): JSX.Element => {
  const currentUser: ICurrentUser = useContext<ICurrentUser>(CurrentUserContext);

  return (
    <>
      <main className='main'>
        <section className='profile'>
          <div className='profile__photo-container' onClick={onAvatarEdit}>
            <img
              src={currentUser.avatar || defaultAvatar}
              alt='фото профиля'
              className='profile__photo'
            />
          </div>

          <div className='profile__info'>
            <div className='profile__title'>
              <h1 className='profile__name'>{currentUser.name || '...'}</h1>
              <button
                className='profile__edit-button'
                type='button'
                aria-label='Редактировать'
                onClick={onProfileEdit}
              />
            </div>

            <p className='profile__description'>{currentUser.about || '...'}</p>
          </div>

          <button
            className='profile__add-button'
            type='button'
            aria-label='Добавить'
            onClick={onAddPlace}
          />
        </section>

        <section className='photo-elements'>
          <ul className='photo-elements__list'>
            {cards.map((card) => (
              <Card
                card={card}
                key={card._id}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Main;
