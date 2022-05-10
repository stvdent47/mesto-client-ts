export type UserDto = {
  _id: string;
  name: string;
  about: string;
  email: string;
  avatar: string;
};

export class User {
  _id: string;
  name: string;
  about: string;
  email: string;
  avatar: string;

  constructor(dto: UserDto) {
    this._id = dto._id;
    this.name = dto.name;
    this.about = dto.about;
    this.email = dto.email;
    this.avatar = dto.avatar;
  }
}

export type UserState = {
  user: User;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
};

export enum UserActionTypes {
  FETCH_CURRENT_USER = 'FETCH_CURRENT_USER',
  REGISTER_USER = 'REGISTER_USER',
  LOGIN_USER = 'LOGIN_USER',
  UPDATE_USER_INFO = 'UPDATE_USER_INFO',
  UPDATE_USER_AVATAR = 'UPDATE_USER_AVATAR',

  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SET_CURRENT_USER_INFO = 'SET_CURRENT_USER_INFO',
  SET_CURRENT_USER_AVATAR = 'SET_CURRENT_USER_AVATAR',
  SET_LOGGED_IN = 'SET_LOGGED_IN',
}

export type FetchUser = {
  type: UserActionTypes.FETCH_CURRENT_USER;
  payload: { jwt: string };
};

export type RegisterUser = {
  type: UserActionTypes.REGISTER_USER;
  payload: { email: string; password: string };
};

export type LoginUser = {
  type: UserActionTypes.LOGIN_USER;
  payload: { email: string; password: string };
};

export type UpdateUserInfo = {
  type: UserActionTypes.UPDATE_USER_INFO;
  payload: { profileName: string; profileAbout: string };
};

export type UpdateUserAvatar = {
  type: UserActionTypes.UPDATE_USER_AVATAR;
  payload: { avatarUrl: string };
};

export type SetCurrentUser = {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: User;
};

export type SetCurrentUserInfo = {
  type: UserActionTypes.SET_CURRENT_USER_INFO;
  payload: { profileName: string; profileAbout: string };
};

export type SetCurrentUserAvatar = {
  type: UserActionTypes.SET_CURRENT_USER_AVATAR;
  payload: { avatarUrl: string };
};
export type SetLoggedIn = {
  type: UserActionTypes.SET_LOGGED_IN;
  payload: boolean;
};

export type UserAction =
  | FetchUser
  | RegisterUser
  | LoginUser
  | UpdateUserInfo
  | UpdateUserAvatar
  | SetCurrentUser
  | SetCurrentUserInfo
  | SetCurrentUserAvatar
  | SetLoggedIn;
