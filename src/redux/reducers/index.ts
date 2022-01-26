import { combineReducers } from 'redux';
import { cardReducer } from './cardReducer/';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  cards: cardReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
