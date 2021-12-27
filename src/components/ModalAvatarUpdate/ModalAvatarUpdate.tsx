import React, { useEffect } from 'react';
import useStyles from '../ModalWithForm/modalWithFormChildrenStyles';
// components
import ModalWithForm from '../ModalWithForm/ModalWithForm';
// hooks
import useFormWithValidation from '../../hooks/useFormWithValidation';
// constants
import { PICTURE_LINK_PLACEHOLDER, SAVE_BUTTON_TEXT, UPDATE_AVATAR_TEXT } from '../../utils/constants';

interface ModalAvatarUpdateProps {
  isOpen: boolean;
  onClose: () => void;
  onAvatarUpdate: (avatarUrl: string, resetForm: () => void) => void;
}
export const ModalAvatarUpdate: React.FC<ModalAvatarUpdateProps> = React.memo(
  ({ isOpen, onClose, onAvatarUpdate }): JSX.Element => {
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
        title={UPDATE_AVATAR_TEXT}
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
  }
);
