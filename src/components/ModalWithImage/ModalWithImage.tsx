import React from 'react';
import useStyles from './modalWithImageStyles';
// import './ModalWithImage.css';
import { ICard } from '../../interfaces/ICard';

interface ModalWithImageProps {
  isOpen: boolean;
  card: ICard;
  onClose: () => void;
}

export const ModalWithImage: React.FC<ModalWithImageProps> = ({
  isOpen,
  card,
  onClose,
}): JSX.Element => {
  const classes = useStyles({ isOpen });
  return (
    <div className={classes.picModal}>
      <div className={classes.picModal__container}>
        <figure className={classes.picModal__picture}>
          <img
            src={card.link}
            alt='Полноразмерное фото места'
            className={classes.picModal__image}
          />
          <figcaption className={classes.picModal__caption}>{card.name}</figcaption>
        </figure>

        <button
          className={classes.picModal__closeButton}
          type='button'
          aria-label='Закрыть'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ModalWithImage;
