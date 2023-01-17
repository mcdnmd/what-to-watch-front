import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.type';
import { AxiosInstance } from 'axios';
import { changeAuthStatus, setDataLoadedStatus, setFilmList, setUser } from './action';
import { Film } from '../types/film';
import { APIRoute } from '../types/APIRouter.enum';
import { AuthData } from '../types/auth-data.type';
import { User } from '../types/user.type';
import { dropToken, saveToken } from '../service/token';
import { AuthorizationStatus } from '../const';


export const fetchFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(false));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(setFilmList(data));
    dispatch(setDataLoadedStatus(true));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(setUser(user));
    dispatch(changeAuthStatus(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    dropToken();
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: user} = await api.get<User>(APIRoute.Login);
      dispatch(setUser(user));
      dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    }
  }
);
