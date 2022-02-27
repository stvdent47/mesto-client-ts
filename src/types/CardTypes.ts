export type CardDto = {
  _id: string;
  name: string;
  link: string;
  owner: string;
  likes: string[];
  createdAt: string;
};

export class Card {
  _id: string;
  name: string;
  link: string;
  owner: string;
  likes: string[];
  createdAt: string;

  constructor(dto: CardDto) {
    this._id = dto._id;
    this.name = dto.name;
    this.link = dto.link;
    this.owner = dto.owner;
    this.likes = dto.likes;
    this.createdAt = dto.createdAt;
  }
}

export type CardState = {
  cards: Card[];
  isLoading: boolean;
  error: string | null;
};

export enum CardActionTypes {
  FETCH_CARDS = 'FETCH_CARDS',
  CREATE_CARD = 'CREATE_CARD',
  LIKE_CARD = 'LIKE_CARD',
  DELETE_CARD = 'DELETE_CARD',

  SET_CARDS = 'SET_CARDS',
}

export type FetchCards = {
  type: CardActionTypes.FETCH_CARDS;
};

export type CreateCard = {
  type: CardActionTypes.CREATE_CARD;
  payload: { name: string; link: string };
};

export type LikeCard = {
  type: CardActionTypes.LIKE_CARD;
  payload: { id: string; isLiked: boolean };
};

export type DeleteCard = {
  type: CardActionTypes.DELETE_CARD;
  payload: string;
};

export type SetCards = {
  type: CardActionTypes.SET_CARDS;
  payload: Card[];
};

export type CardAction = FetchCards | CreateCard | LikeCard | DeleteCard | SetCards;
