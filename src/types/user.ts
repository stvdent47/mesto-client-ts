export enum UserActionTypes {
  USER_FETCHING = 'USER_FETCHING',
  USER_SET_INFO = 'USER_SET_INFO',
  USER_FETCH_ERROR = 'USER_FETCH_ERROR',
  USER_SET_LOGGED_IN = 'USER_SET_LOGGED_IN',
  USER_UPDATE_INFO = 'USER_UPDATE_INFO',
}

export type User = {
  name: string;
  about: string;
  email: string;
  avatar: string;
  _id: string;
};

export type UserState = {
  user: User;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
};

export const emptyUser: User = {
  name: '',
  about: '',
  email: '',
  avatar: '',
  _id: '',
};

export type UserFetch = {
  type: UserActionTypes.USER_FETCHING;
};

export type UserFetchSuccess = {
  type: UserActionTypes.USER_SET_INFO;
  payload: User;
};

export type UserFetchError = {
  type: UserActionTypes.USER_FETCH_ERROR;
  payload: string;
};

export type UserSetLoggedIn = {
  type: UserActionTypes.USER_SET_LOGGED_IN;
  paylaod: boolean;
};

export type UserUpdateInfo = {
  type: UserActionTypes.USER_UPDATE_INFO;
  payload: User;
};

export type UserAction = UserFetch | UserFetchSuccess | UserFetchError | UserSetLoggedIn | UserUpdateInfo;
