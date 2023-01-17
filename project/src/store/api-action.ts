import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.type';
import { AxiosInstance } from 'axios';
import { setDataLoadedStatus, setFilmList } from './action';
import { Film } from '../types/film';
import { APIRoute } from '../types/APIRouter.enum';


export const fetchFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(false));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(setFilmList(data));
    dispatch(setDataLoadedStatus(true));
  },
);

