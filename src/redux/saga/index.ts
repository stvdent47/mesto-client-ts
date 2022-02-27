import { all, fork } from 'redux-saga/effects';
import { cardWatcher } from './cardSaga/cardSaga';

export function* rootWatcher() {
  yield all([fork(cardWatcher)]);
}
