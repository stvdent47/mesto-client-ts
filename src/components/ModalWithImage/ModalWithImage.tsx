import React from 'react';

export const ModalWithImage: React.FC = () => {
  return (
    <div className='pic-modal'>
      <div className='pic-modal__container'>
        <figure className='pic-modal__picture'>
          <img alt='Полноразмерное фото места' className='pic-modal__image' />
          <figcaption className='pic-modal__caption'></figcaption>
        </figure>

        <button className='pic-modal__close-button' type='button' aria-label='Закрыть'></button>
      </div>
    </div>
  );
};

export default ModalWithImage;
