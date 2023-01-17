import { Genre } from '../types/genre.enum';
import { films } from '../mocks/films.mock';
import { createReducer } from '@reduxjs/toolkit';
import { changeActiveGenre, setFilmList } from './action';
import { AppState } from '../types/store.type';

const initialState: AppState = {
  activeGenre: Genre.ALL_GENRES,
  filmList: films
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveGenre, (state, action) => {
      const {newGenre} = action.payload;
      state.activeGenre = newGenre;
    })
    .addCase(setFilmList, (state, action) => {
      const {filmList} = action.payload;
      state.filmList = filmList;
    });
});

