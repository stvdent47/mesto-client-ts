import env from "react-dotenv";
import checkErrors from '../checkErrors';

const { API_URL } = env;

interface IUpdatedUser {
  name: string;
  about: string;
}

const updateUser = (name: string, about: string): Promise<IUpdatedUser> => {
  return fetch(`${API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      about,
    }),
  }).then(checkErrors);
}

export default updateUser;
