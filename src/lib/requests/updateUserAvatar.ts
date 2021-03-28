import env from "react-dotenv";
import checkErrors from '../checkErrors';

const { API_URL } = env;
// updating profile avatar on the server
export const updateUserAvatar = (avatarUrl: string) => {
  return fetch(`${API_URL}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatarUrl,
    }),
  }).then(checkErrors);
}