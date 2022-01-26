import React from 'react';
// types
import { CardType } from '../../types/card';
// hooks
import useStyles from './cardStyles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

type CardProps = {
  card: CardType;
  onCardClick: (card: CardType) => void;
};

export const Card: React.FC<CardProps> = React.memo(({ card, onCardClick }): JSX.Element => {
  const { user } = useTypedSelector((state) => state.user);

  const { deleteCard, likeCard } = useActions();

  const { name, link, likes, owner, _id: cardId } = card;

  const isMyCard = Boolean(owner === user._id);
  const isLiked = Boolean(likes.find((id) => id === user._id));

  const classes = useStyles({ isLiked, isMyCard });

  const handleCardClick = (): void => {
    onCardClick(card);
  };
  const handleCardLike = (): void => {
    likeCard(cardId, isLiked);
  };

  const handleCardDelete = (): void => {
    deleteCard(card._id);
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
