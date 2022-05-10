import React, { useEffect } from 'react';
// components
import { ModalWithForm } from '../ModalWithForm/ModalWithForm';
// hooks
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
// types
import { User } from '../../types/UserTypes';
// constants
import { SAVE_BUTTON_TEXT } from '../../utils/constants';
// styles
import { useStyles } from '../ModalWithForm/modalWithFormChildrenStyles';

type ModalEditProps = {
  user?: User;
  isOpen: boolean;
  onClose: () => void;
  updateUser?: (profileName: string, profileAbout: string) => void;
};

export const ModalEdit = ({ user, isOpen, onClose, updateUser }: ModalEditProps): JSX.Element => {
  const classes = useStyles();

  const { values, setValues, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    const { profileName, profileAbout } = values;

    updateUser?.(profileName, profileAbout);
  };

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  useEffect(() => {
    setValues({
      profileName: user?.name || '',
      profileAbout: user?.about || '',
    });
  }, [user, isOpen]);

  return (
    <ModalWithForm
      name='edit'
      title='Редактировать профиль'
      submitButtonText={SAVE_BUTTON_TEXT}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <input
        type='text'
        name='profileName'
        id='profile-name-input'
        placeholder='Ваше имя'
        className={classes.modal__input}
        required
        minLength={2}
        maxLength={40}
        autoComplete='off'
        value={values.profileName || ''}
        onChange={handleChange}
      />
      <p
        className={`${classes['modal__input-error-message']} ${
          errors.profileName ? classes['modal__input-error-message_visible'] : ''
        }`}
        id='profile-name-error'
      >
        {errors.profileName}
      </p>

      <input
        type='text'
        name='profileAbout'
        id='profile-job-input'
        placeholder='Ваша профессия'
        className={classes.modal__input}
        required
        minLength={2}
        maxLength={200}
        autoComplete='off'
        value={values.profileAbout || ''}
        onChange={handleChange}
      />
      <p
        className={`${classes['modal__input-error-message']} ${
          errors.profileAbout ? classes['modal__input-error-message_visible'] : ''
        }`}
        id='profile-job-error'
      >
        {errors.profileAbout}
      </p>
    </ModalWithForm>
  );
};
