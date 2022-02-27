import env from 'react-dotenv';
import { UserDto } from '../../types/UserTypes';
import checkErrors from '../checkErrors';

const { API_URL } = env;

const getCurrentUserInfo = (token: string): Promise<UserDto> => {
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
