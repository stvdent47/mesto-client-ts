import React, { useContext } from 'react';
import './Card.css';
// interfaces
import { ICurrentUser } from '../../interfaces/ICurrentUser';
import { ICard } from '../../interfaces/ICard';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
interface CardProps {
  card: ICard;
  onCardClick: (card: ICard) => void;
  onCardLike: (cardId: string, isLiked: boolean) => void;
  onCardDelete: (cardId: string) => void;
}

const Card: React.FC<CardProps> = ({
  card,
  onCardClick,
  onCardLike,
  onCardDelete,
}: CardProps): JSX.Element => {
  const currentUser: ICurrentUser = useContext<ICurrentUser>(CurrentUserContext);
  // console.log(card);
  const { name, link, likes, owner, _id: cardId } = card;

  const isMyCard = Boolean(owner === currentUser._id);
  const isLiked = Boolean(likes.find((id) => id === currentUser._id));

  const handleCardClick = (): void => {
    onCardClick(card);
  };
  const handleCardLike = (): void => {
    onCardLike(cardId, isLiked);
  };

  const handleCardDelete = (): void => {
    onCardDelete(card._id);
  };

  return (
    <li className='photo-elements__item'>
      <img
        className='photo-elements__image'
        src={link}
        alt='Фото места'
        onClick={handleCardClick}
      />
      <div className='photo-elements__caption'>
        <h2 className='photo-elements__text'>{name}</h2>
        <div className='photo-elements__like-container'>
          <button
            className={`photo-elements__like-button ${
              isLiked ? 'photo-elements__like-button_active' : ''
            }`}
            type='button'
            aria-label='Нравится'
            onClick={handleCardLike}
          />
          <p className='photo-elements__like-counter'>{likes.length || '0'}</p>
        </div>
        <button
          className={`photo-elements__delete-button ${
            !isMyCard ? 'photo-elements__delete-button_hidden' : ''
          }`}
          type='button'
          aria-label='Удалить'
          onClick={handleCardDelete}
        />
      </div>
    </li>
  );
};

export default React.memo(Card);
