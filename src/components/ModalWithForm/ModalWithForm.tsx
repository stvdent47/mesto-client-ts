import React from 'react';
import './ModalWithForm.css';

interface ModalWithFormProps {
  name: string;
  title: string;
  submitButtonText: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  // onSubmit(test: string): void;
}

const ModalWithForm: React.FC<ModalWithFormProps> = ({ name, title, submitButtonText, isOpen, onClose, children }) => {
  return (
    <div className={`modal ${name}-modal ${isOpen ? 'modal_opened' : ''}`}>
      <div className='modal__container'>
        <h2 className='modal__title'>{title}</h2>
        <form action='#' name={`form-${name}-modal`} className='modal__form' method='POST' noValidate>
          {children}
          <button type='submit' className='modal__button'>
            {submitButtonText}
          </button>
        </form>

        <button className='modal__close-button' type='button' aria-label='Закрыть' onClick={onClose} />
      </div>
    </div>
  );
};

export default ModalWithForm;
