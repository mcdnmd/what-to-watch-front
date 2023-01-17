import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre.enum';
import {Film} from '../types/film';

export const changeActiveGenre = createAction<{newGenre: Genre}>('changeActiveGenre');
export const setFilmList = createAction<{filmList: Film[]}>('setFilmList');
