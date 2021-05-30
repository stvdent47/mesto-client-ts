import { createUseStyles } from 'react-jss';

const modalWithFormChildrenStyles = {
  modal__input: {
    maxWidth: 'calc(100% - 72px)',
    width: '100%',
    margin: { top: 0, right: 36, bottom: 0, left: 36 },
    padding: { top: 0, right: 0, bottom: 13, left: 0 },
    border: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    outline: 'none',
  },
  modal__input_type_error: {
    borderBottom: '1px solid #ff0000',
  },
  'modal__input-error-message': {
    visibility: 'hidden',
    maxWidth: 358,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#ff0000',
    margin: { top: 0, right: 36, bottom: 0, left: 36 },
    padding: { top: 32, right: 0, bottom: 0, left: 0 },
  },
  'modal__input-error-message_visible': {
    visibility: 'visible',
    padding: { top: 4, right: 0, bottom: 13, left: 0 },
  },
  '@media all and (max-width: 400px)': {
    modal__input: {
      maxWidth: 'calc(100% - 40px)',
      margin: { top: 0, right: 20, botton: 0, left: 20 },
    },
    'modal__input-error-message-error': {
      margin: { top: 0, right: 20, botton: 0, left: 20 },
    },
  },
};

const useStyles = createUseStyles(modalWithFormChildrenStyles);

export default useStyles;
