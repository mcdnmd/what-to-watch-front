import { Genre } from './genre.enum';
import { Film } from './film';

export type AppState = {
  activeGenre: Genre,
  filmList: Film[]
}

