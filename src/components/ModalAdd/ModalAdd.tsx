import React, { useEffect } from 'react';
// components
import { ModalWithForm } from '../ModalWithForm/ModalWithForm';
// hooks
import { useStyles } from '../ModalWithForm/modalWithFormChildrenStyles';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
// constants
import { SAVE_BUTTON_TEXT } from '../../utils/constants';

type ModalAddProps = {
  isOpen: boolean;
  onClose: () => void;

  createCard: (name: string, link: string) => void;
};

export const ModalAdd = ({ isOpen, onClose, createCard }: ModalAddProps): JSX.Element => {
  const classes = useStyles();
  const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const { placeName: name, placeLink: link } = values;

    createCard(name, link);
    onClose();
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
        className={classes.modal__input}
        required
        minLength={1}
        maxLength={30}
        autoComplete='off'
        value={values.placeName || ''}
        onChange={handleChange}
      />
      <p
        className={`${classes['modal__input-error-message']} ${
          errors.placeName ? classes['modal__input-error-message_visible'] : ''
        }`}
        id='place-name-error'
      >
        {errors.placeName}
      </p>

      <input
        type='url'
        name='placeLink'
        id='place-link-input'
        placeholder='Ссылка на картинку'
        className={classes.modal__input}
        required
        value={values.placeLink || ''}
        onChange={handleChange}
      />
      <p
        className={`${classes['modal__input-error-message']} ${
          errors.placeLink ? classes['modal__input-error-message_visible'] : ''
        }`}
        id='place-link-error'
      >
        {errors.placeLink}
      </p>
    </ModalWithForm>
  );
};
