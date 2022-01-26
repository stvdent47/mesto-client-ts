import React, { useEffect } from 'react';
// components
import ModalWithForm from '../ModalWithForm/ModalWithForm';
// hooks
import { useActions } from '../../hooks/useActions';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useStyles } from '../ModalWithForm/modalWithFormChildrenStyles';
// constants
import { PICTURE_LINK_PLACEHOLDER, SAVE_BUTTON, UPDATE_AVATAR_TITLE } from '../../constants/text';

type ModalAvatarUpdateProps = {
  isOpen: boolean;
  closeModal: () => void;
};
export const ModalAvatarUpdate: React.FC<ModalAvatarUpdateProps> = React.memo(({ isOpen, closeModal }): JSX.Element => {
  const classes = useStyles();

  const { updateUserAvatar } = useActions();
  const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    updateUserAvatar(values.avatarUrl);

    resetForm();
    closeModal();
  };

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <ModalWithForm
      name='avatar-update'
      title={UPDATE_AVATAR_TITLE}
      submitButtonText={SAVE_BUTTON}
      isOpen={isOpen}
      onClose={closeModal}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <input
        type='url'
        name='avatarUrl'
        id='avatar-link-input'
        placeholder={PICTURE_LINK_PLACEHOLDER}
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
});
