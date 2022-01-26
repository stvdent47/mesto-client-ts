import React, { useEffect } from 'react';
// components
import ModalWithForm from '../ModalWithForm/ModalWithForm';
// hooks
import { useActions } from '../../hooks/useActions';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useStyles } from '../ModalWithForm/modalWithFormChildrenStyles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// constants
import { EDIT_PROFILE_TITLE, SAVE_BUTTON, YOUR_JOB_PLACEHOLDER, YOUR_NAME_PLACEHOLDER } from '../../constants/text';

type ModalEditProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export const ModalEdit: React.FC<ModalEditProps> = ({ isOpen, closeModal }): JSX.Element => {
  const classes = useStyles();

  const { user } = useTypedSelector((state) => state.user);
  const { updateUser } = useActions();

  const { values, setValues, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    const { profileName, profileAbout } = values;
    updateUser(profileName, profileAbout);

    closeModal();
  };

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  useEffect(() => {
    setValues({
      profileName: user.name,
      profileAbout: user.about,
    });
  }, [user, isOpen]);

  return (
    <ModalWithForm
      name='edit'
      title={EDIT_PROFILE_TITLE}
      submitButtonText={SAVE_BUTTON}
      isOpen={isOpen}
      onClose={closeModal}
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
