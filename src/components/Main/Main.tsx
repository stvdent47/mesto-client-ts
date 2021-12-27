import React, { useEffect, useContext } from 'react';
import useStyles from './mainStyles';
// components
import { Footer } from '../Footer/Footer';
import { Card } from '../Card/Card';
// interfaces
import { ICurrentUser } from '../../interfaces/ICurrentUser';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import defaultAvatar from '../../images/profile-photo.jpg';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CardType } from '../../types/card';

interface MainProps {
  isLoggedIn: boolean;
  onProfileEdit: () => void;
  onAvatarEdit: () => void;
  onAddPlace: () => void;
  onCardClick: (card: CardType) => void;
}

export const Main: React.FC<MainProps> = ({
  isLoggedIn,
  onProfileEdit,
  onAvatarEdit,
  onAddPlace,
  onCardClick,
}): JSX.Element => {
  const classes = useStyles();
  const currentUser: ICurrentUser = useContext<ICurrentUser>(CurrentUserContext);

  const { fetchCards } = useActions();
  const { cards } = useTypedSelector((state) => state.cards);

  useEffect(() => {
    if (isLoggedIn) {
      fetchCards();
    }
  }, [isLoggedIn]);

  return (
    <>
      <main className={classes.main}>
        <section className={classes.profile}>
          <div className={classes.profile__photoContainer} onClick={onAvatarEdit}>
            <img src={currentUser.avatar || defaultAvatar} alt='фото профиля' className={classes.profile__photo} />
          </div>

          <div className={classes.profile__info}>
            <div className={classes.profile__title}>
              <h1 className={classes.profile__name}>{currentUser.name || '...'}</h1>
              <button
                className={classes.profile__editButton}
                type='button'
                aria-label='Редактировать'
                onClick={onProfileEdit}
              />
            </div>

            <p className={classes.profile__description}>{currentUser.about || '...'}</p>
          </div>

          <button className={classes.profile__addButton} type='button' aria-label='Добавить' onClick={onAddPlace} />
        </section>

        <section className={classes.photoElements}>
          <ul className={classes.photoElements__list}>
            {cards.map((card: CardType) => (
              <Card card={card} key={card._id} onCardClick={onCardClick} />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};
