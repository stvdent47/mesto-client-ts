import React, { useEffect, useContext } from 'react';
// components
import ModalWithForm from '../ModalWithForm/ModalWithForm';
// hooks
import useFormWithValidation from '../../hooks/useFormWithValidation';
// contexts
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SAVE_BUTTON_TEXT } from '../../utils/constants';

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateUser: (name: string, about: string) => void;
}

const ModalEdit: React.FC<ModalEditProps> = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, setValues, errors, handleChange } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    onUpdateUser(values.profileName, values.profileAbout);
  }

  useEffect(() => {
    setValues({
      profileName: currentUser.name,
      profileAbout: currentUser.about,
    });
  }, [currentUser, isOpen]);
  // const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(evt.target.value);
  // };

  return (
    <ModalWithForm
      name='edit'
      title='Редактировать профиль'
      submitButtonText={SAVE_BUTTON_TEXT}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='profileName'
        id='profile-name-input'
        placeholder='Ваше имя'
        className='modal__input'
        required
        minLength={2}
        maxLength={40}
        autoComplete='off'
        value={values.profileName || ''}
        onChange={handleChange}
      />
      <p className='modal__input-error-message' id='profile-name-error'></p>

      <input
        type='text'
        name='profileAbout'
        id='profile-job-input'
        placeholder='Ваша профессия'
        className='modal__input'
        required
        minLength={2}
        maxLength={200}
        autoComplete='off'
        value={values.profileAbout || ''}
        onChange={handleChange}
      />
      <p className='modal__input-error-message' id='profile-job-error'></p>
    </ModalWithForm>
  );
};

export default ModalEdit;
