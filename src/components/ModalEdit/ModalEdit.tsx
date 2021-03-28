import React from 'react';

import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { SAVE_BUTTON_TEXT } from '../../utils/constants';

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalEdit: React.FC<ModalEditProps> = ({ isOpen, onClose }) => {
  // const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(evt.target.value);
  // };

  return (
    <ModalWithForm name='edit' title='Редактировать профиль' submitButtonText={SAVE_BUTTON_TEXT} isOpen={isOpen} onClose={onClose}>
      <input
        type='text'
        name='profile-name'
        id='profile-name-input'
        placeholder='Ваше имя'
        className='modal__input'
        required
        minLength={2}
        maxLength={40}
        autoComplete='off'
      />
      <p className='modal__input-error-message' id='profile-name-error'></p>

      <input
        type='text'
        name='profile-job'
        id='profile-job-input'
        placeholder='Ваша профессия'
        className='modal__input'
        required
        minLength={2}
        maxLength={200}
        autoComplete='off'
      />
      <p className='modal__input-error-message' id='profile-job-error'></p>
    </ModalWithForm>
  );
};

export default ModalEdit;
