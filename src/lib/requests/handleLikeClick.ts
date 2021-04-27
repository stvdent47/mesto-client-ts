import env from 'react-dotenv';
import checkErrors from '../checkErrors';
import { ICard } from '../../interfaces/ICard';

const { API_URL } = env;
//
export const handleLikeClick = (cardId: string, isLiked: boolean): Promise<ICard> => {
  return fetch(`${API_URL}/cards/${cardId}/likes`, {
    method: isLiked ? 'DELETE' : 'PUT',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then(checkErrors);
};

export default handleLikeClick;
