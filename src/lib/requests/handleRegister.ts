import env from 'react-dotenv';
import checkErrors from '../checkErrors';

const { API_URL } = env;

const handleRegister = (email: string, password: string): Promise<{ message: string }> => {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(checkErrors);
};

export default handleRegister;
