import { UserActionTypes } from '../../types/UserTypes';

export const loginUser = (email: string, password: string) => ({
  type: UserActionTypes.LOGIN_USER,
  payload: { email, password },
});

export const fetchCurrentUser = (jwt: string) => ({ type: UserActionTypes.FETCH_CURRENT_USER, payload: { jwt } });

export const updateUser = (profileName: string, profileAbout: string) => ({
  type: UserActionTypes.UPDATE_USER_INFO,
  payload: { profileName, profileAbout },
});
