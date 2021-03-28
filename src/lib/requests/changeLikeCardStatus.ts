import env from "react-dotenv";
import checkErrors from '../checkErrors';

const { API_URL } = env;
// 
export const changeLikeCardStatus = (cardId: string, isLiked: boolean) => {
  return fetch(`${API_URL}/cards/${cardId}/likes`, {
    method: isLiked ? 'DELETE' : 'PUT',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  }).then(checkErrors);
}