import { createUseStyles } from 'react-jss';
import likeButton from '../../images/like-button-image.svg';
import likeButtonActive from '../../images/like-button-active.svg';
import deleteButton from '../../images/delete-button-background-image.svg';

interface ICardStyleProps {
  isLiked: boolean;
  isMyCard: boolean;
}

const cardStyles = {
  photoElements__item: {
    position: 'relative',
    maxWidth: 282,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  photoElements__text: {
    maxWidth: 227,
    margin: '25px 0 31px 21px',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: '29px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  photoElements__caption: {
    minHeight: 85,
    margin: 0,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photoElements__likeContainer: {
    margin: '0 21px 0 0',
  },
  photoElements__likeButton: ({ isLiked }: ICardStyleProps) => ({
    width: 21,
    height: 18,
    margin: 0,
    padding: 0,
    border: 'none',
    backgroundColor: '#fff',
    backgroundImage: `url(${isLiked ? likeButtonActive : likeButton})`,
    backgroundRepeat: 'no-repeat',
    backgroundposition: 'center',
    backgroundSize: 'contain',
    boxSizing: 'border-box',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.6,
      transition: 'opacity 0.2s linear',
    },
  }),
  photoElements__likeCounter: {
    padding: 0,
    margin: 0,
    fontFamily: 'Inter',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'center',
  },
  photoElements__deleteButton: ({ isMyCard }: ICardStyleProps) => ({
    visibility: isMyCard ? 'visible' : 'hidden',
    width: 18,
    height: 19,
    padding: 0,
    position: 'absolute',
    top: 18,
    right: 15,
    border: 'none',
    backgroundImage: `url(${deleteButton})`,
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    boxSizing: 'border-box',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.6,
      transition: 'opacity .2s linear',
    },
  }),
  photoElements__image: {
    display: 'block',
    width: 282,
    height: 282,
    objectFit: 'cover',
    margin: 0,
    '&:hover': {
      cursor: 'pointer',
    },
  },
};

const useStyles = createUseStyles(cardStyles);

export default useStyles;
