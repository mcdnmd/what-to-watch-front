import { Film } from '../types/film';
import List from '../components/list/list';
import SiteLogo from '../components/site-logo/site-logo';
import GenreList from '../components/genre-list/genre-list';
import { Genre } from '../types/genre.enum';
import { useEffect, useState } from 'react';
import { AuthorizationStatus, PAGINATION_AMOUNT } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/store-handler';
import ShowMore from '../components/show-more/show-more';
import UserProfileBlock from '../components/user-profile/user-profile';
import { redirectToRoute } from '../store/action';
import { api } from '../service/api';
import { APIRoute } from '../types/APIRouter.enum';
import MyList from '../components/my-list/my-list';


function MainPage(): JSX.Element {
  const [promoFilm, setPromoFilm] = useState<Film | null>(null);
  const [showedFilmsCount, setShowedFilmsCount] = useState(PAGINATION_AMOUNT);
  const {activeGenre, filmList, authorizationStatus} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const allGenres = [Genre.ALL_GENRES, ...new Set(filmList.map((film) => film.genre))];
  const filteredFilms = filmList
    .filter((film) => film.genre === activeGenre || activeGenre === Genre.ALL_GENRES)
    .slice(0, showedFilmsCount);

  const handleShowMoreClick = () => {
    setShowedFilmsCount(showedFilmsCount + PAGINATION_AMOUNT);
  };

  const handlePlayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!promoFilm){
      return;
    }
    dispatch(redirectToRoute(`/player/${promoFilm.id}`));
  };

  useEffect(() => {
    const fetchPromoFilm = async () => {
      const {data: newPromoFilm} = await api.get<Film>(APIRoute.Promo);
      setPromoFilm(newPromoFilm);
    };
    fetchPromoFilm();
  }, []);


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <SiteLogo/>

          <UserProfileBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} width={218} height={327} />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayClick}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                { authorizationStatus === AuthorizationStatus.Auth && promoFilm ? <MyList filmId={promoFilm?.id}/> : null }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList genreList={allGenres}/>

          <List films={filteredFilms}/>

          {filteredFilms.length % PAGINATION_AMOUNT === 0 && <ShowMore onClick={handleShowMoreClick}/>}

        </section>
        <footer className="page-footer">
          <SiteLogo light/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
