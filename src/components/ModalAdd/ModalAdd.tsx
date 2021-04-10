import React, { useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
//
import useFormWithValidation from '../../hooks/useFormWithValidation';
//
import { SAVE_BUTTON_TEXT } from '../../utils/constants';

interface ModalAddProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPlace: (name: string, link: string, resetFormCb: () => void) => void;
}

const ModalAdd: React.FC<ModalAddProps> = ({ isOpen, onClose, onAddPlace }) => {
  const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const { placeName, placeLink } = values;

    onAddPlace(placeName, placeLink, resetForm);
  };

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <ModalWithForm
      name='add'
      title='Новое место'
      submitButtonText={SAVE_BUTTON_TEXT}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <input
        type='text'
        name='placeName'
        id='place-name-input'
        placeholder='Название'
        className='modal__input'
        required
        minLength={1}
        maxLength={30}
        autoComplete='off'
        value={values.placeName || ''}
        onChange={handleChange}
      />
      <p
        className={`modal__input-error-message ${errors.placeName ? 'modal__input-error-message_visible' : ''}`}
        id='place-name-error'
      >
        {errors.placeName}
      </p>

      <input
        type='url'
        name='placeLink'
        id='place-link-input'
        placeholder='Ссылка на картинку'
        className='modal__input'
        required
        value={values.placeLink || ''}
        onChange={handleChange}
      />
      <p
        className={`modal__input-error-message ${errors.placeLink ? 'modal__input-error-message_visible' : ''}`}
        id='place-link-error'
      >
        {errors.placeLink}
      </p>
    </ModalWithForm>
  );
};

export default ModalAdd;
