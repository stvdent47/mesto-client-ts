import env from 'react-dotenv';
import checkErrors from '../checkErrors';
import { ICurrentUser } from '../../interfaces/ICurrentUser';

const { API_URL } = env;

const getCurrentUserInfo = (token: string): Promise<ICurrentUser> => {
  return fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkErrors);
};

export default getCurrentUserInfo;
