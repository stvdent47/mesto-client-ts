import React, { useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import useStyles from '../ModalWithForm/modalWithFormChildrenStyles';
//
import useFormWithValidation from '../../hooks/useFormWithValidation';
//
import { NAMING_TEXT, NEW_PLACE_TEXT, PICTURE_LINK_PLACEHOLDER, SAVE_BUTTON_TEXT } from '../../utils/constants';
import { useActions } from '../../hooks/useActions';

interface ModalAddProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAdd: React.FC<ModalAddProps> = React.memo(
  ({ isOpen, onClose }): JSX.Element => {
    const classes = useStyles();

    const { createCard } = useActions();
    const { values, errors, isFormValid, handleChange, resetForm } = useFormWithValidation();

    const handleSubmit = (evt: React.FormEvent) => {
      evt.preventDefault();

      const { placeName: name, placeLink: link } = values;
      createCard({ name, link });

      onClose();
    };

    useEffect(() => {
      resetForm();
    }, [isOpen]);

    return (
      <ModalWithForm
        name='add'
        title={NEW_PLACE_TEXT}
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
          placeholder={NAMING_TEXT}
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
  }
);
