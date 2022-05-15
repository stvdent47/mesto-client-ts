import { CardAction, CardActionTypes, CardState } from '../../../types/CardTypes';

const initialState: CardState = {
  cards: [],
  isLoading: false,
  error: null,
};

export const cardReducer = (state: CardState = initialState, action: CardAction): CardState => {
  switch (action.type) {
    case CardActionTypes.SET_CARDS:
      return { ...state, cards: action.payload };
    default:
      return { ...state };
  }
};
