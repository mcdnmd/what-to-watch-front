import { Genre } from '../types/genre.enum';
import { createReducer } from '@reduxjs/toolkit';
import { changeActiveGenre, changeAuthStatus, setDataLoadedStatus, setFilmList, setUser } from './action';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../const';
import { User } from '../types/user.type';

type AppState = {
  activeGenre: string;
  filmList: Film[];
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

const initialState: AppState = {
  activeGenre: Genre.ALL_GENRES,
  filmList: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setFilmList, (state, action) => {
      state.filmList = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

