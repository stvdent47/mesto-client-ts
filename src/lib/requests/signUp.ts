import env from 'react-dotenv';
import axios from 'axios';

const { API_URL } = env;

export const signUp = (email: string, password: string) => {
  return axios.post(
    `${API_URL}/signup`,
    { email, password },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};
