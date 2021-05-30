import React, { useContext } from 'react';
import useStyles from './cardStyles';
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
}): JSX.Element => {
  const currentUser: ICurrentUser = useContext<ICurrentUser>(CurrentUserContext);
  const { name, link, likes, owner, _id: cardId } = card;

  const isMyCard = Boolean(owner === currentUser._id);
  const isLiked = Boolean(likes.find((id) => id === currentUser._id));

  const classes = useStyles({ isLiked, isMyCard });

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
    <li className={classes.photoElements__item}>
      <img
        className={classes.photoElements__image}
        src={link}
        alt='Фото места'
        onClick={handleCardClick}
      />
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
};

export default React.memo(Card);
