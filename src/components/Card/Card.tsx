import React from 'react';
import { useStyles } from './cardStyles';
// types
import { Card as CardType } from '../../types/CardTypes';
import { User } from '../../types/UserTypes';

type CardProps = {
  card: CardType;
  onCardClick: (card: CardType) => void;

  likeCard: (id: string, isLiked: boolean) => void;
  deleteCard: (id: string) => void;

  currentUser: User;
};

export const Card = React.memo(({ card, onCardClick, likeCard, deleteCard, currentUser }: CardProps): JSX.Element => {
  const { name, link, likes, owner, _id: cardId } = card;

  const isMyCard = Boolean(owner === currentUser._id);
  const isLiked = Boolean(likes.find((id) => id === currentUser._id));

  const classes = useStyles({ isLiked, isMyCard });

  const handleCardClick = (): void => {
    onCardClick(card);
  };

  const handleCardLike = (): void => {
    likeCard(cardId, isLiked);
  };

  const handleCardDelete = (): void => {
    deleteCard(cardId);
  };

  return (
    <li className={classes.photoElements__item}>
      <img className={classes.photoElements__image} src={link} alt='Фото места' onClick={handleCardClick} />
      <div className={classes.photoElements__caption}>
        <h2 className={classes.photoElements__text}>{name}</h2>
        <div className={classes.photoElements__likeContainer}>
          <button
            className={classes.photoElements__likeButton}
            type='button'
            aria-label='Нравится'
            onClick={handleCardLike}
          />
          <p className={classes.photoElements__likeCounter}>{likes.length || '0'}</p>
        </div>
        <button
          className={classes.photoElements__deleteButton}
          type='button'
          aria-label='Удалить'
          onClick={handleCardDelete}
        />
      </div>
    </li>
  );
});
