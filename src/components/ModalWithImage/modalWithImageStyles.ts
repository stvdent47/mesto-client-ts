import { createUseStyles } from 'react-jss';
import closeButton from '../../images/close-button-background-image.svg';

interface modalWithImageStyleProps {
  isOpen: boolean;
}
const modalWithImageStyles = {
  picModal: ({ isOpen }: modalWithImageStyleProps) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, .9)',
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
    transition: 'all .2s linear',
  }),
  picModal__container: {
    position: 'relative',
  },
  picModal__picture: {
    margin: 0,
  },
  picModal__image: {
    maxWidth: '75vw',
    maxHeight: '75vh',
  },
  picModal__caption: {
    maxWidth: '75vw',
    color: '#fff',
    fontSize: '12px',
    lineHeight: '15px',
    padding: { top: 10, right: 0, bottom: 0, left: 0 },
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  picModal__closeButton: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: -40,
    right: -40,
    backgroundColor: 'transparent',
    backgroundImage: `url(${closeButton})`,
    backgroundPosition: 'center',
    backgroundSize: '60px 60px',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    padding: 0,
    outline: 'none',
    '&:hover': {
      opacity: 0.6,
      cursor: 'pointer',
      transition: 'opacity 0.2s linear',
    },
  },
  '@media all and (max-width: 425px)': {
    picModal__closeButton: {
      width: 30,
      height: 30,
      top: -30,
      right: -30,
      backgroundSize: '50px 50px',
    },
  },
};

const useStyles = createUseStyles(modalWithImageStyles);

export default useStyles;
