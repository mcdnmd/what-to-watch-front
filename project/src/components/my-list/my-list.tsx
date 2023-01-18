import { useAppDispatch, useAppSelector } from '../../hooks/store-handler';
import React, { useState } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import { api } from '../../service/api';
import { Film } from '../../types/film';
import { APIRoute } from '../../types/APIRouter.enum';
import { fetchFavoriteFilms } from '../../store/api-action';

type Props = {
  filmId: number;
};

function MyList(props: Props): JSX.Element {
  const {filmId} = props;
  const {favoriteFilms, authorizationStatus} = useAppSelector((state) => state);
  const [isFavorite, setFavorite] = useState(favoriteFilms.some((film: Film) => film.id === filmId));
  const dispatch = useAppDispatch();

  const handleMyListClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (authorizationStatus !== AuthorizationStatus.Auth){
      dispatch(redirectToRoute(AppRoute.SignIn));
      return;
    }

    const changeFavoriteFilmStatus = async () => {
      const {data: changedFilm} = await api.post<Film>(`${APIRoute.Favorite}/${filmId}/${isFavorite ? 0 : 1}`);
      setFavorite(changedFilm.isFavorite);
    };

    changeFavoriteFilmStatus()
      .then(() => dispatch(fetchFavoriteFilms()));
  };


  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyListClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default MyList;
