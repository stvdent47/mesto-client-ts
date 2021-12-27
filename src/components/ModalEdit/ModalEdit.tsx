import React, { useEffect, useContext } from 'react';
import useStyles from '../ModalWithForm/modalWithFormChildrenStyles';
// components
import ModalWithForm from '../ModalWithForm/ModalWithForm';
// hooks
import useFormWithValidation from '../../hooks/useFormWithValidation';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {
  EDIT_PROFILE_TEXT,
  SAVE_BUTTON_TEXT,
  YOUR_JOB_PLACEHOLDER,
  YOUR_NAME_PLACEHOLDER,
} from '../../utils/constants';

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateUser: (name: string, about: string) => void;
}

export const ModalEdit: React.FC<ModalEditProps> = ({ isOpen, onClose, onUpdateUser }): JSX.Element => {
  const classes = useStyles();
  const currentUser = useContext(CurrentUserContext);

  const { values, setValues, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    const { profileName, profileAbout } = values;

    onUpdateUser(profileName, profileAbout);
  };

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  useEffect(() => {
    setValues({
      profileName: currentUser.name,
      profileAbout: currentUser.about,
    });
  }, [currentUser, isOpen]);

  return (
    <ModalWithForm
      name='edit'
      title={EDIT_PROFILE_TEXT}
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
        placeholder={YOUR_NAME_PLACEHOLDER}
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
        placeholder={YOUR_JOB_PLACEHOLDER}
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
