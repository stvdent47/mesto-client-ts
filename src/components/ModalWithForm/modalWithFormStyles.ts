import { createUseStyles } from 'react-jss';

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
  modal__button: ({ isFormValid }: IModalWithFormStylesProps) => ({
    color: isFormValid ? '#fff' : '#000',
    maxWidth: 'calc(100% - 72px)',
    width: '100%',
    height: '50.15px',
    margin: { top: 32, right: 36, bottom: 36, left: 36 },
    backgroundColor: isFormValid ? '#000' : '#fff',
    border: isFormValid ? 'none' : '1px solid #000',
    borderRadius: '2px',
    fontSize: '18px',
    lineHeight: '22px',
    outline: 'none',
    opacity: isFormValid ? '1' : '.2',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      cursor: 'pointer',
      transition: 'background-color 0.2s linear',
    },
  }),
};

const useStyles = createUseStyles(modalWithFormStyles);

export default useStyles;
