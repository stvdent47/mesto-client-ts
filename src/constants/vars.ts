import { CardType } from '../types/card';
import { OpenedModalsState } from '../types/modals';

export const emptyCard: CardType = {
  name: '',
  link: '',
  owner: '',
  likes: [],
  createdAt: null,
  _id: '',
};

export const allModalsClosed: OpenedModalsState = {
  userUpdate: false,
  userUpdateAvatar: false,
  addPlace: false,
  placeImage: false,
};
