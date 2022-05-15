import { UserState, emptyUser, UserAction, UserActionTypes } from '../../../types/user';

const initialState: UserState = {
  user: emptyUser,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_FETCHING:
      return { ...state, loading: true };
    case UserActionTypes.USER_SET_INFO:
      return { ...state, loading: false, user: action.payload };
    // case UserActionTypes.USER_FETCH_ERROR
    case UserActionTypes.USER_SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.paylaod };
    case UserActionTypes.USER_UPDATE_INFO:
      return { ...state, loading: false, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};
