import env from "react-dotenv";
import checkErrors from '../checkErrors';

const { API_URL } = env;
// removing a card from the server
export const deleteCard = (cardId: string) => {
  return fetch(`${API_URL}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then(checkErrors);
}