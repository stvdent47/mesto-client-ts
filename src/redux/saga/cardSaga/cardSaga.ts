import env from 'react-dotenv';
import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { store } from '../..';
import { cardApi } from '../../../api';
import { JWT_LOCAL_STORAGE_KEY } from '../../../constants/default';
import { Card, CardActionTypes, CardDto, CreateCard, DeleteCard, LikeCard } from '../../../types/CardTypes';
import { CardActionCreators } from '../../actionCreators/CardActionCreators';

const { API_URL } = env;

function* fetchCardsWorker() {
  try {
    const { data }: AxiosResponse = yield call(cardApi.get, '', {
      headers: {
        authorization: `Bearer ${localStorage.getItem(JWT_LOCAL_STORAGE_KEY)}`,
        'Content-Type': 'application/json',
      },
    });

    const cards: Card[] = (data || []).map((card: CardDto) => new Card(card));

    yield put(CardActionCreators.setCards(cards));
  } catch (err) {}
}

function* createCardWorker({ payload: { name, link } }: CreateCard) {
  try {
    const { data }: AxiosResponse = yield call(
      cardApi.post,
      '',
      {
        name,
        link,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(JWT_LOCAL_STORAGE_KEY)}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const newCard: Card = new Card(data || {});
    const { cards = [] } = store.getState().cardReducer;

    yield put(CardActionCreators.setCards([newCard, ...cards]));
  } catch (err) {}
}

function* likeCardWorker({ payload: { id, isLiked } }: LikeCard) {
  try {
    const { data }: AxiosResponse = yield call(axios, `${API_URL}/cards/${id}/likes`, {
      method: isLiked ? 'delete' : 'put',
      headers: {
        authorization: `Bearer ${localStorage.getItem(JWT_LOCAL_STORAGE_KEY)}`,
        'Content-Type': 'application/json',
      },
    });
    const changedCard: Card = new Card(data || {});

    const { cards = [] } = store.getState().cardReducer;
    const updatedCards = cards.map((card: Card) => (card._id === changedCard._id ? changedCard : card));

    yield put(CardActionCreators.setCards(updatedCards));
  } catch (err) {}
}

function* deleteCardWorker({ payload: id }: DeleteCard) {
  try {
    const { data }: AxiosResponse = yield call(cardApi.delete, `/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(JWT_LOCAL_STORAGE_KEY)}`,
        'Content-Type': 'application/json',
      },
    });
    const deletedCard: Card = new Card(data || {});

    const { cards = [] } = store.getState().cardReducer;

    yield put(CardActionCreators.setCards(cards.filter((card) => card._id !== deletedCard._id)));
  } catch (err) {}
}

export function* cardWatcher() {
  yield takeEvery(CardActionTypes.FETCH_CARDS, fetchCardsWorker);
  yield takeEvery(CardActionTypes.CREATE_CARD, createCardWorker);
  yield takeEvery(CardActionTypes.LIKE_CARD, likeCardWorker);
  yield takeEvery(CardActionTypes.DELETE_CARD, deleteCardWorker);
}
