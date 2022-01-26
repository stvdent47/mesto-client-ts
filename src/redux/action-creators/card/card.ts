import env from 'react-dotenv';
import axios from 'axios';
import { Dispatch } from 'redux';
import { CardAction, CardActionTypes } from '../../../types/card';
import { JWT_TOKEN_KEY } from '../../../constants/defaults';

const { API_URL } = env;

export const fetchCards = () => {
  return async (dispatch: Dispatch<CardAction>) => {
    try {
      dispatch({ type: CardActionTypes.FETCH_CARDS });

      const response = await axios.get(`${API_URL}/cards`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_KEY)}`,
          'Content-Type': 'application/json',
        },
      });

      if (response) {
        dispatch({ type: CardActionTypes.FETCH_CARDS_SUCCESS, payload: response.data });
      }
    } catch (err) {
      console.error({ err });
      // dispatch({})
    }
  };
};

export const createCard = ({ name, link }: { name: string; link: string }) => {
  return async (dispatch: Dispatch<CardAction>) => {
    try {
      const response = await axios.post(
        `${API_URL}/cards`,
        {
          name,
          link,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_KEY)}`,
            'Content-Type': 'application/json',
          },
        }
      );

      dispatch({ type: CardActionTypes.CREATE_CARD, payload: response.data });
    } catch (err) {
      console.error({ err });
      // dispatch({})
    }
  };
};

export const deleteCard = (cardId: string) => {
  return async (dispatch: Dispatch<CardAction>) => {
    try {
      const response = await axios.delete(`${API_URL}/cards/${cardId}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_KEY)}`,
          'Content-Type': 'application/json',
        },
      });

      dispatch({ type: CardActionTypes.DELETE_CARD, payload: response.data });
    } catch (err) {
      console.error({ err });
      // dispatch({})
    }
  };
};

export const likeCard = (cardId: string, isLiked: boolean) => {
  return async (dispatch: Dispatch<CardAction>) => {
    try {
      const response = await axios({
        url: `${API_URL}/cards/${cardId}/likes`,
        method: isLiked ? 'delete' : 'put',
        headers: {
          authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_KEY)}`,
          'Content-Type': 'application/json',
        },
      });

      dispatch({ type: CardActionTypes.LIKE_CARD, payload: response.data });
    } catch (err) {
      console.error({ err });
      // dispatch({})
    }
  };
};
