import env from 'react-dotenv';
import { ICurrentUser } from '../../interfaces/ICurrentUser';
import checkErrors from '../../lib/checkErrors';

const { API_URL } = env;

interface ICurrentUserWithToken extends ICurrentUser {
  token: string;
  id: string;
}

const authorize = (email: string, password: string): Promise<ICurrentUserWithToken> => {
  return fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkErrors);
};

export default authorize;
