import env from "react-dotenv";
import checkErrors from '../checkErrors';

import { ICard } from '../../interfaces/ICard';

const { API_URL } = env;
const tempToken: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGJkYjFiMGUyZTEzNDQyOGE2MGUwYSIsImlhdCI6MTYxNjk2OTQ2OSwiZXhwIjoxNjE3NTc0MjY5fQ.7dJ3JwyUMRXb113tLRsidnCN-YKa_Pwesh0Jx15Lydc';
// removing a card from the server
const deleteCard = (cardId: string): Promise<ICard> => {
  return fetch(`${API_URL}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      // authorization: `Bearer ${localStorage.getItem('jwt')}`,
      authorization: `Bearer ${tempToken}`,
      'Content-Type': 'application/json',
    },
  }).then(checkErrors);
}

export default deleteCard;