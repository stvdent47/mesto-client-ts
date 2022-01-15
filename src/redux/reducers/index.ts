import { combineReducers } from 'redux';
import { cardReducer } from './cardReducer/';

export const rootReducer = combineReducers({
  cards: cardReducer,
  // user: ,
});

export type RootState = ReturnType<typeof rootReducer>;
