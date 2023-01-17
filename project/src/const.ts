export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:filmId',
  AddReview = '/films/:filmId/review',
  Player = '/player/:filmId',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DELAY_BEFORE_PLAYING_PREVIEW = 1;
export const PAGINATION_AMOUNT = 8;
