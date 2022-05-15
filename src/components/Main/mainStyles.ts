import { createUseStyles } from 'react-jss';

import editButton from '../../images/edit-button-background-image.svg';
import addButton from '../../images/add-button-background-image.svg';
import avatarEdit from '../../images/avatar-edit-image.svg';

const mainStyles = {
  main: {
    maxWidth: 882,
    width: '100%',
    margin: { top: 0, right: 'auto', bottom: 0, left: 'auto' },
  },
  profile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: { top: 40, right: 0, bottom: 50, left: 0 },
  },
  profile__photoContainer: {
    width: 120,
    height: 120,
    position: 'relative',
    margin: { top: 0, right: 30, bottom: 0, left: 0 },
    borderRadius: 50,
    '&::after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${avatarEdit})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '26px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 0, 0, .8)',
      opacity: 0,
    },
    '&:hover::after': {
      transition: 'opacity 0.2s linear',
      cursor: 'pointer',
      opacity: 1,
    },
  },
  profile__photo: {
    width: 120,
    height: 120,
    objectFit: 'cover',
    borderRadius: '50%',
  },
  profile__info: {
    margin: 0,
    padding: { top: 18, right: 0, bottom: 25, left: 0 },
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  profile__title: {
    margin: { top: 0, right: 0, bottom: 16, left: 0 },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  profile__name: {
    maxWidth: 500,
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '42px',
    lineHeight: 1.33,
    margin: { top: 0, right: 16, bottom: 0, left: 0 },
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  profile__editButton: {
    width: 24,
    height: 24,
    backgroundColor: '#000',
    border: 'none',
    backgroundImage: `url(${editButton})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.6,
      transition: 'opacity 0.2s linear',
    },
  },
  profile__description: {
    maxWidth: 550,
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    margin: 0,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  profile__addButton: {
    minWidth: 150,
    height: 50,
    backgroundColor: '#000',
    border: '2px solid #fff',
    backgroundImage: `url(${addButton})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '22px',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    margin: 0,
    padding: 0,
    borderRadius: 2,
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.6,
      transition: 'opacity 0.2s linear',
    },
  },
  photoElements: {
    margin: 0,
    padding: { top: 0, right: 0, bottom: 66, left: 0 },
  },
  photoElements__list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(282px, 1fr))',
    gridGap: '21px 18px',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyItems: 'center',
  },
};

export const useStyles = createUseStyles(mainStyles);