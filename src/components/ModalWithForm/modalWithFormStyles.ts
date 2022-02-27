import { createUseStyles } from 'react-jss';
import modalCloseButton from '../../images/close-button-background-image.svg';
interface IModalWithFormStylesProps {
  isOpen: boolean;
  isFormValid: boolean;
}

const modalWithFormStyles = {
  modal: ({ isOpen }: IModalWithFormStylesProps) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    visibility: isOpen ? 'visible' : 'hidden',
    opacity: isOpen ? 1 : 0,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'all 0.2s linear',
  }),
  modal__container: {
    maxWidth: 430,
    width: '100%',
    backgroundColor: '#fff',
    position: 'relative',
    margin: 0,
    borderRadius: 10,
  },
  modal__title: {
    maxWidth: 'calc(100% - 68px)',
    width: '100%',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: '29px',
    margin: 0,
    padding: { top: 36, right: 34, bottom: 54, left: 34 },
  },
  modal__button: ({ isFormValid }: IModalWithFormStylesProps) => ({
    color: isFormValid ? '#fff' : '#000',
    maxWidth: 'calc(100% - 72px)',
    width: '100%',
    height: 50.15,
    margin: { top: 32, right: 36, bottom: 36, left: 36 },
    backgroundColor: isFormValid ? '#000' : '#fff',
    border: isFormValid ? 'none' : '1px solid #000',
    borderRadius: 2,
    fontSize: '18px',
    lineHeight: '22px',
    outline: 'none',
    opacity: isFormValid ? '1' : '.2',
    '&:hover': isFormValid
      ? {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          cursor: 'pointer',
          color: '#fff',
          transition: 'background-color 0.2s linear',
        }
      : {
          cursor: 'default',
          backgroundColor: '#fff',
          color: '#000',
          border: '1px solid #000000',
        },
  }),
  modal__button_type_update: {
    margin: { top: 12, left: 36, bottom: 36, right: 36 },
  },
  modal__button_type_remove: {
    margin: { top: 0, left: 36, bottom: 36, right: 36 },
  },
  'modal__close-button': {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    backgroundImage: `url(${modalCloseButton})`,
    backgroundPosition: 'center',
    backgroundSize: '60px 60px',
    border: 'none',
    padding: 0,
    outline: 'none',
    '&:hover': {
      opacity: 0.6,
      cursor: 'pointer',
      transition: 'opacity 0.2s linear',
    },
  },
  modal__title_type_remove: {
    padding: { top: 36, right: 34, bottom: 38, left: 34 },
  },
  '@media all and (max-width: 550px)': {
    modal__container: {
      maxWidth: 300,
    },
    'modal__close-button': {
      top: -30,
      right: -30,
      width: 30,
      height: 30,
      backgroundSize: '50px 50px',
    },
  },
  '@media all and (max-width: 400px)': {
    modal__container: {
      maxWidth: 240,
    },
    modal__title: {
      maxWidth: 'calc(100% - 40px)',
      fontSize: '18px',
      lineHeight: '22px',
      margin: 0,
      padding: { top: 30, right: 20, bottom: 36, left: 20 },
    },
    modal__button: {
      maxWidth: 'calc(100% - 40px)',
      margin: { top: 0, right: 20, bottom: 30, left: 20 },
      fontSize: '14px',
      lineHeight: '17px',
    },
  },
};

export const useStyles = createUseStyles(modalWithFormStyles);
