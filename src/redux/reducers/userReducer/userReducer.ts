import { initialUser } from '../../../constants/default';
import { UserAction, UserActionTypes, UserState } from '../../../types/UserTypes';

const initialState: UserState = {
  user: initialUser,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, user: action.payload };
    case UserActionTypes.SET_CURRENT_USER_INFO:
      return {
        ...state,
        user: { ...state.user, name: action.payload.profileName, about: action.payload.profileAbout },
      };
    case UserActionTypes.SET_CURRENT_USER_AVATAR:
      return {
        ...state,
        user: { ...state.user, avatar: action.payload.avatarUrl },
      };
    case UserActionTypes.SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };

    default:
      return { ...state };
  }
};
