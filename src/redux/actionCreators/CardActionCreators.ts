import { Card, CardActionTypes } from '../../types/CardTypes';

export const CardActionCreators = {
  fetchCards: () => ({ type: CardActionTypes.FETCH_CARDS }),
  setCards: (payload: Card[]) => ({ type: CardActionTypes.SET_CARDS, payload }),
  deleteCard: (payload: string) => ({ type: CardActionTypes.DELETE_CARD, payload }),
};
