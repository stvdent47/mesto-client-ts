import React from 'react';
import './Card.css';

import ICard from '../../interfaces/ICard';

interface CardProps {
  card: ICard;
  onCardClick: (card: ICard) => void;
}

export const Card: React.FC<CardProps> = ({ card, onCardClick }) => {
  const { name, link, likes } = card;
  const handleCardClick = () => {
    onCardClick(card);
  }

  return (
    <li className='photo-elements__item'>
      <img className='photo-elements__image' src={link} alt='Фото места' onClick={handleCardClick} />
      <div className='photo-elements__caption'>
        <h2 className='photo-elements__text'>{name}</h2>
        <div className='photo-elements__like-container'>
          <button className='photo-elements__like-button' type='button' aria-label='Нравится' />
          <p className='photo-elements__like-counter'>{likes.length || '0'}</p>
        </div>
        <button className='photo-elements__delete-button' type='button' aria-label='Удалить' />
      </div>
    </li>
  );
};
