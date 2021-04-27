import env from 'react-dotenv';
import checkErrors from '../checkErrors';
import { ICard } from '../../interfaces/ICard';

const { API_URL } = env;

const createCard = (name: string, link: string): Promise<ICard> => {
  return fetch(`${API_URL}/cards`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      link,
    }),
  }).then(checkErrors);
};

export default createCard;
