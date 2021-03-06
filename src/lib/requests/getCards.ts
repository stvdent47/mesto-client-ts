import env from "react-dotenv";
import checkErrors from '../checkErrors';

const { API_URL } = env;

// getting cards from the server
const getCards = (token: string) => {
  return fetch(`${API_URL}/cards`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
      // authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(checkErrors);
}

export default getCards;