import { initialUser } from '../../../constants/default';
import { UserAction, UserState } from '../../../types/UserTypes';

const initialState: UserState = {
  user: initialUser,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    // case
    default:
      return { ...state };
  }
};
