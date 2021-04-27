import env from "react-dotenv";
import checkErrors from '../checkErrors';
import { ICard } from '../../interfaces/ICard';

const { API_URL } = env;

const deleteCard = (cardId: string): Promise<ICard> => {
  return fetch(`${API_URL}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then(checkErrors);
}

export default deleteCard;