import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { appApi } from '../../../api/appApi/appApi';
import { userApi } from '../../../api/userApi/userApi';
import {
  FetchUser,
  LoginUser,
  RegisterUser,
  UpdateUserAvatar,
  UpdateUserInfo,
  User,
  UserActionTypes,
} from '../../../types/UserTypes';

function* registerUserWorker({ payload: { email, password } }: RegisterUser) {
  try {
    const { data }: AxiosResponse = yield call(
      appApi.post,
      '/signup',
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
    console.log({ data });
  } catch (err) {
    console.log({ err });
  }
}

function* loginUserWorker({ payload: { email, password } }: LoginUser) {
  try {
    const { data = {} }: AxiosResponse = yield call(
      appApi.post,
      '/signin',
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

    const { token } = data;
    localStorage.setItem('jwt', token);

    const currentUser = new User(data);

    yield put({ type: UserActionTypes.SET_CURRENT_USER, payload: currentUser });
    yield put({ type: UserActionTypes.SET_LOGGED_IN, payload: true });
  } catch (err) {}
}

function* fetchCurrentUserWorker({ payload: { jwt } }: FetchUser) {
  try {
    const { data = {} }: AxiosResponse = yield call(userApi.get, '/me', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });

    const currentUser = new User(data);

    yield put({ type: UserActionTypes.SET_CURRENT_USER, payload: currentUser });
    yield put({ type: UserActionTypes.SET_LOGGED_IN, payload: true });
  } catch (err) {}
}

function* updateUserInfoWorker({ payload: { profileName: name, profileAbout: about } }: UpdateUserInfo) {
  try {
    const { data }: AxiosResponse = yield call(
      userApi.patch,
      '/me',
      {
        name,
        about,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    yield put({
      type: UserActionTypes.SET_CURRENT_USER_INFO,
      payload: { profileName: data.name, profileAbout: data.about },
    });
  } catch (err) {}
}

function* updateUserAvatarWorker({ payload: { avatarUrl } }: UpdateUserAvatar) {
  try {
    const { data }: AxiosResponse = yield call(
      userApi.patch,
      '/me/avatar',
      {
        avatarUrl,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    yield put({
      type: UserActionTypes.SET_CURRENT_USER_AVATAR,
      payload: { avatarUrl: data.avatar },
    });
  } catch (err) {}
}

export function* userWatcher() {
  yield takeEvery(UserActionTypes.REGISTER_USER, registerUserWorker);
  yield takeEvery(UserActionTypes.LOGIN_USER, loginUserWorker);
  yield takeEvery(UserActionTypes.FETCH_CURRENT_USER, fetchCurrentUserWorker);
  yield takeEvery(UserActionTypes.UPDATE_USER_INFO, updateUserInfoWorker);
  yield takeEvery(UserActionTypes.UPDATE_USER_AVATAR, updateUserAvatarWorker);
}
