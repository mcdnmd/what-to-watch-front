import { Link, useParams } from 'react-router-dom';
import SiteLogo from '../components/site-logo/site-logo';
import ReviewForm from '../components/review-form/review-form';
import UserProfileBlock from '../components/user-profile/user-profile';
import { ReviewData } from '../types/review-data.type.';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/store-handler';
import { Film } from '../types/film';
import { api } from '../service/api';
import { redirectToRoute } from '../store/action';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';


function AddReviewPage(): JSX.Element {
  const {filmId} = useParams();
  const [film, setFilm] = useState<null | Film>(null);
  const [formDisabled, setFormDisabled] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = (reviewData: ReviewData) => {
    const addReview = async () => {
      setFormDisabled(true);
      const url = `/comments/${filmId ? filmId : -1}`;
      await api.post(url, {comment: reviewData.text, rating: reviewData.rating});
    };

    addReview()
      .then(() => {
        const redirectUrl = `films/${filmId ? filmId : -1}`;
        setFormDisabled(false);
        dispatch(redirectToRoute(redirectUrl));
      })
      .catch((error: AxiosError) => {
        setFormDisabled(false);
        toast.warn(error.message);
      });
  };

  useEffect(() => {
    const fetchFilm = async () => {
      const {data: filmInfo} = await api.get<Film>(`/films/${filmId || -1}`);
      setFilm(filmInfo);
    };

    fetchFilm()
      .catch((error: AxiosError) => toast.warn(error.message));
  }, [filmId]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <SiteLogo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film?.id}/review`} className={'breadcrumbs__link'}>{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href='/' className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserProfileBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width={218} height={327} />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm disabled={formDisabled} onSubmit={handleSubmit} />
      </div>
    </section>
  );
}

export default AddReviewPage;
