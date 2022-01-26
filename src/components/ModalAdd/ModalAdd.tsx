import React, { useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
// hooks
import { useActions } from '../../hooks/useActions';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useStyles } from '../ModalWithForm/modalWithFormChildrenStyles';
// constants
import { NEW_PLACE_PLACEHOLDER, NEW_PLACE_TITLE, PICTURE_LINK_PLACEHOLDER, SAVE_BUTTON } from '../../constants/text';

interface ModalAddProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAdd: React.FC<ModalAddProps> = React.memo(({ isOpen, onClose }): JSX.Element => {
  const classes = useStyles();

  const { createCard } = useActions();
  const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const { placeName, placeLink } = values;
    createCard({ name: placeName, link: placeLink });

    onClose();
  };

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <ModalWithForm
      name='add'
      title={NEW_PLACE_TITLE}
      submitButtonText={SAVE_BUTTON}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <input
        type='text'
        name='placeName'
        id='place-name-input'
        placeholder={NEW_PLACE_PLACEHOLDER}
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
        placeholder={PICTURE_LINK_PLACEHOLDER}
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
});
