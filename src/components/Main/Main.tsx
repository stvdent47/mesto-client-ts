import React from 'react';
import { Card } from '../Card/Card';
import { ICard } from '../interfaces';
import './Main.css';

interface MainProps {
  onProfileEdit: () => void;
  onAvatarEdit: () => void;
  onAddPlace: () => void;
  cards: ICard[];
}

const Main: React.FC<MainProps> = ({ onProfileEdit, onAvatarEdit, onAddPlace, cards }) => {
  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__photo-container' onClick={onAvatarEdit}>
          <img src='./images/profile-photo.jpg' alt='фото профиля' className='profile__photo' />
        </div>

        <div className='profile__info'>
          <div className='profile__title'>
            <h1 className='profile__name'>...</h1>
            <button className='profile__edit-button' type='button' aria-label='Редактировать' onClick={onProfileEdit} />
          </div>

          <p className='profile__description'>...</p>
        </div>

        <button className='profile__add-button' type='button' aria-label='Добавить' onClick={onAddPlace} />
      </section>

      <section className='photo-elements'>
        <ul className='photo-elements__list'>
          {cards.map((card) => (
            <Card card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
