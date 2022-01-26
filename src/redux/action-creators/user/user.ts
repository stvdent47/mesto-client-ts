import env from 'react-dotenv';
import { Dispatch } from 'redux';
import axios from 'axios';
import { UserAction, UserActionTypes } from '../../../types/user';
import { JWT_TOKEN_KEY } from '../../../constants/defaults';

const { API_URL } = env;

export const getCurrentUser = (token: string) => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.USER_FETCHING });

    const response = await axios.get(`${API_URL}/users/me`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response) {
      dispatch({ type: UserActionTypes.USER_SET_INFO, payload: response.data });
    }
  } catch (err) {
    console.error({ err });
  }
};

export const setIsLoggedIn = (isLoggedIn: boolean) => (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionTypes.USER_SET_LOGGED_IN, paylaod: isLoggedIn });
};

export const signIn = (email: string, password: string) => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.USER_FETCHING });

    const response = await axios.post(
      `${API_URL}/signin`,
      {
        email,
        password,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    if (response) {
      const { token } = response.data;
      localStorage.setItem(JWT_TOKEN_KEY, token);

      dispatch({ type: UserActionTypes.USER_SET_LOGGED_IN, paylaod: true });
      dispatch({ type: UserActionTypes.USER_SET_INFO, payload: response.data });
    }
  } catch (err) {
    console.error({ err });
  }
};

export const updateUser = (name: string, about: string) => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.USER_FETCHING });

    const response = await axios.patch(
      `${API_URL}/users/me`,
      { name, about },
      {
        headers: { authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_KEY)}`, 'Content-Type': 'application/json' },
      }
    );

    if (response) {
      dispatch({ type: UserActionTypes.USER_UPDATE_INFO, payload: response.data });
    }
  } catch (err) {
    console.error({ err });
  }
};

export const updateUserAvatar = (avatarUrl: string) => async (dispatch: Dispatch<UserAction>) => {
  try {
    const response = await axios.patch(
      `${API_URL}/users/me/avatar`,
      { avatarUrl },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_KEY)}`,
          'Content-Type': 'application/json',
        },
      }
    );
    if (response) {
      dispatch({ type: UserActionTypes.USER_UPDATE_INFO, payload: response.data });
    }
  } catch (err) {
    console.error({ err });
  }
};
