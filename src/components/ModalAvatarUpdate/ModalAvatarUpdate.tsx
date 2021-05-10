import React, { useEffect } from 'react';
// components
import ModalWithForm from '../ModalWithForm/ModalWithForm';
// hooks
import useFormWithValidation from '../../hooks/useFormWithValidation';

import { SAVE_BUTTON_TEXT } from '../../utils/constants';

interface ModalAvatarUpdateProps {
  isOpen: boolean;
  onClose: () => void;
  onAvatarUpdate: (avatarUrl: string, resetForm: () => void) => void;
}
const ModalAvatarUpdate: React.FC<ModalAvatarUpdateProps> = ({
  isOpen,
  onClose,
  onAvatarUpdate,
}: ModalAvatarUpdateProps): JSX.Element => {
  const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    onAvatarUpdate(values.avatarUrl, resetForm);
  };

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <ModalWithForm
      name='avatar-update'
      title='Обновить аватар'
      submitButtonText={SAVE_BUTTON_TEXT}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <input
        type='url'
        name='avatarUrl'
        id='avatar-link-input'
        placeholder='Ссылка на картинку'
        className='modal__input'
        required
        value={values.avatarUrl || ''}
        onChange={handleChange}
      />
      <p
        className={`modal__input-error-message ${
          errors.avatarUrl ? 'modal__input-error-message_visible' : ''
        }`}
        id='avatar-link-error'
      >
        {errors.avatarUrl}
      </p>
    </ModalWithForm>
  );
};

export default ModalAvatarUpdate;
