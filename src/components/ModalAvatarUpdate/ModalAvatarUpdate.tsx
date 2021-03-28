import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

import { SAVE_BUTTON_TEXT } from '../../utils/constants';

interface ModalAvatarUpdateProps {
  isOpen: boolean;
  onClose: () => void;
}
const ModalAvatarUpdate: React.FC<ModalAvatarUpdateProps> = ({ isOpen, onClose }) => {
  return (
    <ModalWithForm name='avatar-update' title='Обновить аватар' submitButtonText={SAVE_BUTTON_TEXT} isOpen={isOpen} onClose={onClose}>
      <input
        type='url'
        name='avatar-link'
        id='avatar-link-input'
        placeholder='Ссылка на картинку'
        className='modal__input'
        required
      />
      <p className='modal__input-error-message' id='avatar-link-error'></p>
    </ModalWithForm>
  );
};

export default ModalAvatarUpdate;
