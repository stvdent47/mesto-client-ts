import { all, fork } from 'redux-saga/effects';
import { cardWatcher } from './cardSaga/cardSaga';
import { userWatcher } from './userSaga/userSaga';

export function* rootWatcher() {
  yield all([fork(cardWatcher), fork(userWatcher)]);
}
