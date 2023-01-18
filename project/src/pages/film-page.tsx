import List from '../components/list/list';
import { Link, useParams, } from 'react-router-dom';
import SiteLogo from '../components/site-logo/site-logo';
import Tabs from '../components/tabs/tabs';
import UserProfileBlock from '../components/user-profile/user-profile';
import { Film } from '../types/film';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store-handler';
import { Review } from '../types/review.type';
import { api } from '../service/api';
import { AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { redirectToRoute } from '../store/action';
import { AppRoute, AuthorizationStatus } from '../const';
import Loader from '../components/loader/loader';


function FilmPage(): JSX.Element {
  const [film, setFilm] = useState<null | Film>(null);
  const {filmId} = useParams();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [similarFilms, setSimilarFilms] = useState<null | Film[]>(null);
  const [reviews, setReviews] = useState<null | Review[]>(null);
  const { authorizationStatus } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scroll({top: 0, behavior: 'smooth'});

    const fetchFilm = async () => {
      const {data: filmInfo} = await api.get<Film>(`/films/${filmId || -1}`);
      setFilm(filmInfo);
    };

    const fetchSimilar = async () => {
      const {data: films} = await api.get<Film[]>(`/films/${filmId || -1}/similar`);
      setSimilarFilms(films);
    };

    const fetchFilmReviews = async () => {
      const { data: filmReviews } = await api.get<Review[]>(`/comments/${filmId || -1}`);
      setReviews(filmReviews);
    };
    setDataLoaded(false);
    fetchFilm()
      .then(() => fetchSimilar())
      .then(() => fetchFilmReviews())
      .then(() => setDataLoaded(true))
      .catch((err: AxiosError) => {
        if (err.response && err.response.status === StatusCodes.NOT_FOUND) {
          dispatch(redirectToRoute(AppRoute.NotFound));
        }
      });
  }, [filmId]);

  // eslint-disable-next-line no-console
  console.log(reviews);
  if (!dataLoaded) {
    return <Loader />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <SiteLogo/>

            <UserProfileBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film?.id}`} >
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>

                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                  <Link to={`/films/${film?.id}/review`} className={'btn film-card__button'}>Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="{218}" height="{327}"/>
            </div>

            <div className="film-card__desc">
              {film && reviews && <Tabs film={film} reviews={reviews} />}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {similarFilms && <List films={similarFilms} />}

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

export default FilmPage;
