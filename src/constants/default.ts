import { CardDto } from '../types/CardTypes';
import { UserDto } from '../types/UserTypes';
import { ModalNameTypes } from '../types/ModalTypes';

export const JWT_LOCAL_STORAGE_KEY = 'jwt';

export const initialUser: UserDto = {
  _id: '',
  name: '',
  about: '',
  email: '',
  avatar: '',
};

export const initialCard: CardDto = {
  name: '',
  link: '',
  owner: '',
  likes: [],
  createdAt: '',
  _id: '',
};

export const initialOpenedModals: Record<ModalNameTypes, boolean> = {
  add: false,
  avatar: false,
  edit: false,
  image: false,
};
