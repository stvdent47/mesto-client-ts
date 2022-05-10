import env from 'react-dotenv';
import axios from 'axios';

const { API_URL } = env;

export const userApi = axios.create({
  baseURL: `${API_URL}/users`,
});
