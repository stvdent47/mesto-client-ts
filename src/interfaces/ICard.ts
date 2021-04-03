export interface ICard {
  name: string;
  link: string;
  owner: string;
  likes: string[];
  createdAt: string;
  _id: string;
}

export const emptyCard: ICard = {
  name: '',
  link: '',
  owner: '',
  likes: [],
  createdAt: '',
  _id: '',
};