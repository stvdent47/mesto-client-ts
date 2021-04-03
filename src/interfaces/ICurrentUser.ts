export interface ICurrentUser {
  name: string;
  about: string;
  email: string;
  avatar: string;
  _id: string;
};

export const emptyUser: ICurrentUser = {
  name: '',
  about: '',
  email: '',
  avatar: '',
  _id: '',
};
