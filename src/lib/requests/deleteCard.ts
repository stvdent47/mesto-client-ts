import env from "react-dotenv";
import checkErrors from '../checkErrors';

import { ICard } from '../../interfaces/ICard';

const { API_URL, TEMP_TOKEN } = env;
// removing a card from the server
const deleteCard = (cardId: string): Promise<ICard> => {
  return fetch(`${API_URL}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      // authorization: `Bearer ${localStorage.getItem('jwt')}`,
      authorization: `Bearer ${TEMP_TOKEN}`,
      'Content-Type': 'application/json',
    },
  }).then(checkErrors);
}

export default deleteCard;