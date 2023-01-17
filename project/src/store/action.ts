import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre.enum';
import {Film} from '../types/film';
import { AuthorizationStatus } from '../const';
import { User } from '../types/user.type';

export const changeActiveGenre = createAction<Genre>('changeActiveGenre');
export const setFilmList = createAction<Film[]>('setFilmList');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const changeAuthStatus = createAction<AuthorizationStatus>('changeAuthStatus');
export const setUser = createAction<User>('setUser');
