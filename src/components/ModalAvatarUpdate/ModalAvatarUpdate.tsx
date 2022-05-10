import React, { useEffect } from 'react';
// components
import { ModalWithForm } from '../ModalWithForm/ModalWithForm';
// hooks
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
// constants
import { SAVE_BUTTON_TEXT } from '../../utils/constants';
// styles
import { useStyles } from '../ModalWithForm/modalWithFormChildrenStyles';

type ModalAvatarUpdateProps = {
  isOpen: boolean;
  onClose: () => void;
  updateAvatar?: (avatarUrl: string) => void;
};
export const ModalAvatarUpdate = ({ isOpen, onClose, updateAvatar }: ModalAvatarUpdateProps): JSX.Element => {
  const classes = useStyles();
  const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    updateAvatar?.(values.avatarUrl);
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
