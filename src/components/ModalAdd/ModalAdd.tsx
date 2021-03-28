import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { SAVE_BUTTON_TEXT } from '../../utils/constants';

interface ModalAddProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAdd: React.FC<ModalAddProps> = ({ isOpen, onClose }) => {
  return (
    <ModalWithForm name='add' title='Новое место' submitButtonText={SAVE_BUTTON_TEXT} isOpen={isOpen} onClose={onClose}>
      <input
        type='text'
        name='place-name'
        id='place-name-input'
        placeholder='Название'
        className='modal__input'
        required
        minLength={1}
        maxLength={30}
        autoComplete='off'
      />
      <p className='modal__input-error-message' id='place-name-error'></p>

      <input
        type='url'
        name='place-link'
        id='place-link-input'
        placeholder='Ссылка на картинку'
        className='modal__input'
        required
      />
      <p className='modal__input-error-message' id='place-link-error'></p>
    </ModalWithForm>
  );
};

export default ModalAdd;
