import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { rootWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export type AppStore = typeof store;
// export type AppDispatch = AppStore['dispatch'];
export type AppDispatch = typeof store.dispatch;
