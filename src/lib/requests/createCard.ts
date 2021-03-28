import env from "react-dotenv";
import checkErrors from '../checkErrors';

const { API_URL } = env;

export interface IcreateCard {
  name: string;
  link: string;
}
// adding a new card to the server
export const createCard = (info: IcreateCard) => {
  return fetch(`${API_URL}/cards`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: info.name,
      link: info.link,
    }),
  }).then(checkErrors);
}