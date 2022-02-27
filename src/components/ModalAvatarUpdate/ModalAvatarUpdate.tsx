import React, { useEffect } from 'react';
import { useStyles } from '../ModalWithForm/modalWithFormChildrenStyles';
// components
import { ModalWithForm } from '../ModalWithForm/ModalWithForm';
// hooks
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

import { SAVE_BUTTON_TEXT } from '../../utils/constants';

interface ModalAvatarUpdateProps {
  isOpen: boolean;
  onClose: () => void;
  onAvatarUpdate: (avatarUrl: string, resetForm: () => void) => void;
}
export const ModalAvatarUpdate = ({ isOpen, onClose, onAvatarUpdate }: ModalAvatarUpdateProps): JSX.Element => {
  const classes = useStyles();
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
        className={classes.modal__input}
        required
        value={values.avatarUrl || ''}
        onChange={handleChange}
      />
      <p
        className={`${classes['modal__input-error-message']} ${
          errors.avatarUrl ? classes['modal__input-error-message_visible'] : ''
        }`}
        id='avatar-link-error'
      >
        {errors.avatarUrl}
      </p>
    </ModalWithForm>
  );
};
