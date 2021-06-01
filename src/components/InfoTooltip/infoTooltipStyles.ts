import { createUseStyles } from 'react-jss';
import closeButton from '../../images/close-button-background-image.svg';

interface IInfoTooltipProps {
  isOpen: boolean;
}

const infoTooltipStyles = {
  signupModal: ({ isOpen }: IInfoTooltipProps) => ({
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
    backgroundColor: 'rgba(0, 0, 0, .5)',
    transition: 'all .2s linear',
  }),
  signupModal__container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 430,
    height: 330,
    backgroundColor: '#fff',
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.15)',
    borderRadius: 10,
  },
  signupModal__img: {
    margin: 0,
    padding: { top: 60, right: 0, bottom: 0, left: 0 },
  },
  signupModal__text: {
    maxWidth: 358,
    margin: { top: 0, right: 'auto', bottom: 0, left: 'auto' },
    padding: { top: 0, right: 0, bottom: 60, left: 0 },
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: '29px',
    textAlign: 'center',
    color: '#000000',
  },
  signupModal__closeButton: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    backgroundImage: `url(${closeButton})`,
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
  '@media all and (max-width: 550px)': {
    signupModal__closeButton: {
      top: -30,
      right: -30,
      width: 30,
      height: 30,
      backgroundSize: '50px 50px',
    },
  },
};

const useStyles = createUseStyles(infoTooltipStyles);

export default useStyles;
