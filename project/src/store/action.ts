import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre.enum';
import {Film} from '../types/film';

export const changeActiveGenre = createAction<Genre>('changeActiveGenre');
export const setFilmList = createAction<Film[]>('setFilmList');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
