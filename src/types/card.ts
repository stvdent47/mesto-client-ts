export enum CardActionTypes {
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  CREATE_CARD = 'CREATE_CARD',
  DELETE_CARD = 'DELETE_CARD',
  LIKE_CARD = 'LIKE_CARD',
}

export type CardType = {
  _id: string;
  likes: string[];
  name: string;
  link: string;
  owner: string;
  createdAt: Date | null;
};

export type CardState = {
  cards: CardType[];
  loading: boolean;
  error: string | null;
};

export type FetchCardsAction = {
  type: CardActionTypes.FETCH_CARDS;
};

export type FetchCardsActionSuccess = {
  type: CardActionTypes.FETCH_CARDS_SUCCESS;
  payload: CardType[];
};

export type CreateCard = {
  type: CardActionTypes.CREATE_CARD;
  payload: CardType;
};

export type DeleteCard = {
  type: CardActionTypes.DELETE_CARD;
  payload: CardType;
};

export type LikeCard = {
  type: CardActionTypes.LIKE_CARD;
  payload: CardType;
};

export type CardAction = FetchCardsAction | FetchCardsActionSuccess | CreateCard | DeleteCard | LikeCard;
