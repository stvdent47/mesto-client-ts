import React from 'react';
import './ModalWithImage.css';
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
}: ModalWithImageProps) => {
  return (
    <div className={`pic-modal ${isOpen ? 'pic-modal_opened' : ''}`}>
      <div className='pic-modal__container'>
        <figure className='pic-modal__picture'>
          <img src={card.link} alt='Полноразмерное фото места' className='pic-modal__image' />
          <figcaption className='pic-modal__caption'>{card.name}</figcaption>
        </figure>

        <button
          className='pic-modal__close-button'
          type='button'
          aria-label='Закрыть'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ModalWithImage;
