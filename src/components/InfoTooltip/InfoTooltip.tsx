import React from 'react';
// hooks
import useStyles from './infoTooltipStyles';
// etc.
import signUpResultSuccessImg from '../../images/signup-modal-result-success.svg';
import signUpResultFailImg from '../../images/signup-modal-result-fail.svg';

interface InfoTooltipProps {
  signUpResult: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ signUpResult, isOpen, onClose }: InfoTooltipProps): JSX.Element => {
  const classes = useStyles({ isOpen });

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
    <div className={classes.signupModal}>
      <div className={classes.signupModal__container}>
        <img src={resultImg} alt='картинка результата' className={classes.signupModal__img} />
        <p className={classes.signupModal__text}>{resultText}</p>
        <button className={classes.signupModal__closeButton} onClick={onClose} />
      </div>
    </div>
  );
};

export default React.memo(InfoTooltip);
