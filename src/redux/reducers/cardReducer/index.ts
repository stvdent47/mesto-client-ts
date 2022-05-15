import { CardAction, CardActionTypes, CardState } from '../../../types/card';

const initialState: CardState = {
  cards: [],
  loading: false,
  error: null,
};

export const cardReducer = (state: CardState = initialState, action: CardAction): CardState => {
  switch (action.type) {
    case CardActionTypes.FETCH_CARDS:
      return { ...state, loading: true };
    case CardActionTypes.FETCH_CARDS_SUCCESS:
      return { ...state, loading: false, cards: action.payload };
    // case CardActionTypes.ERROR
    case CardActionTypes.CREATE_CARD:
      return {
        ...state,
        cards: [action.payload, ...state.cards],
      };
    case CardActionTypes.DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card._id !== action.payload._id),
      };
    case CardActionTypes.LIKE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => (card._id === action.payload._id ? action.payload : card)),
      };
    default:
      return state;
  }
};
