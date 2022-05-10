import { combineReducers } from 'redux';
import { cardReducer } from './cardReducer/cardReducer';
import { userReducer } from './userReducer/userReducer';

export const rootReducer = combineReducers({
  cardReducer,
  userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
