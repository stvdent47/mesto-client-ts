import React from 'react';
import './InfoTooltip.css';
import signUpResultSuccessImg from '../../images/signup-modal-result-success.svg';
import signUpResultFailImg from '../../images/signup-modal-result-fail.svg';

interface InfoTooltipProps {
  signUpResult: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({
  signUpResult,
  isOpen,
  onClose,
}: InfoTooltipProps): JSX.Element => {
  let resultText: string;
  let resultImg: string;

  if (signUpResult) {
    resultText = 'Вы успешно зарегистрировались!';
    resultImg = signUpResultSuccessImg;
  } else {
    resultText = 'Что-то пошло не так! Попробуйте ещё раз.';
    resultImg = signUpResultFailImg;
  }

  return (
    <div className={`signup-modal ${isOpen ? 'signup-modal_opened' : ''}`}>
      <div className='signup-modal__container'>
        <img src={resultImg} alt='картинка результата' className='signup-modal__img' />
        <p className='signup-modal__text'>{resultText}</p>
        <button className='signup-modal__close-button' onClick={onClose} />
      </div>
    </div>
  );
};

export default React.memo(InfoTooltip);
