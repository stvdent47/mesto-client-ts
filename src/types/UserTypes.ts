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
  FETCH_USER = 'FETCH_USER',
}

export type FetchUser = {
  type: UserActionTypes.FETCH_USER;
};

export type UserAction = FetchUser;
