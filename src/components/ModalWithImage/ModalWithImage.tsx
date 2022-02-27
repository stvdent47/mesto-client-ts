// hooks
import { useStyles } from './modalWithImageStyles';
// types
import { CardDto } from '../../types/CardTypes';

interface ModalWithImageProps {
  isOpen: boolean;
  card: CardDto;
  onClose: () => void;
}

export const ModalWithImage = ({ isOpen, card, onClose }: ModalWithImageProps): JSX.Element => {
  const classes = useStyles({ isOpen });

  return (
    <div className={classes.picModal}>
      <div className={classes.picModal__container}>
        <figure className={classes.picModal__picture}>
          <img src={card.link} alt='Полноразмерное фото места' className={classes.picModal__image} />
          <figcaption className={classes.picModal__caption}>{card.name}</figcaption>
        </figure>

        <button className={classes.picModal__closeButton} type='button' aria-label='Закрыть' onClick={onClose} />
      </div>
    </div>
  );
};
