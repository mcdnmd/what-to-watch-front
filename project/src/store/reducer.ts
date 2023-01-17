import { Genre } from '../types/genre.enum';
import { createReducer } from '@reduxjs/toolkit';
import { changeActiveGenre, setDataLoadedStatus, setFilmList } from './action';
import { Film } from '../types/film';

type AppState = {
  activeGenre: string;
  filmList: Film[];
  isDataLoaded: boolean;
};

const initialState: AppState = {
  activeGenre: Genre.ALL_GENRES,
  filmList: [],
  isDataLoaded: false
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
    });
});

