import env from "react-dotenv";
import checkErrors from '../checkErrors';

const { API_URL } = env;

export interface IupdateUser {
  name: string;
  about: string;
}
// editing user profile info on the server
export const updateUser = (info: IupdateUser) => {
  return fetch(`${API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: info.name,
      about: info.about,
    }),
  }).then(checkErrors);
}