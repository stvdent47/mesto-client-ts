import React from 'react';
import useStyles from './modalWithFormStyles';

interface ModalWithFormProps {
  name: string;
  title: string;
  submitButtonText: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onSubmit: (evt: React.FormEvent) => void;
  isFormValid: boolean;
}

const ModalWithForm: React.FC<ModalWithFormProps> = ({
  name,
  title,
  submitButtonText,
  isOpen,
  onClose,
  onSubmit,
  isFormValid,
  children,
}): JSX.Element => {
  const classes = useStyles({ isOpen, isFormValid });

  return (
    // <div className={`modal ${name}-modal ${isOpen ? 'modal_opened' : ''}`}>
    <div className={classes.modal}>
      <div className={classes.modal__container}>
        <h2 className={classes.modal__title}>{title}</h2>
        <form
          action='#'
          onSubmit={onSubmit}
          name={`form-${name}-modal`}
          className='modal__form'
          method='POST'
          noValidate
        >
          {children}
          <button
            type='submit'
            className={classes.modal__button}
            disabled={!isFormValid}
          >
            {submitButtonText}
          </button>
        </form>

        <button
          className={classes['modal__close-button']}
          type='button'
          aria-label='Закрыть'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ModalWithForm;
