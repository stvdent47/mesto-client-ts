import env from 'react-dotenv';
import checkErrors from '../checkErrors';
import { ICard } from '../../interfaces/ICard';

const { API_URL, TEMP_TOKEN } = env;

// adding a new card to the server
const createCard = (name: string, link: string): Promise<ICard> => {
  return fetch(`${API_URL}/cards`, {
    method: 'POST',
    headers: {
      // authorization: `Bearer ${localStorage.getItem('jwt')}`,
      authorization: `Bearer ${TEMP_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      link,
    }),
  }).then(checkErrors);
};

export default createCard;
