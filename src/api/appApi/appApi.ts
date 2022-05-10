import env from 'react-dotenv';
import axios from 'axios';

const { API_URL } = env;

export const appApi = axios.create({
  baseURL: `${API_URL}`,
});
