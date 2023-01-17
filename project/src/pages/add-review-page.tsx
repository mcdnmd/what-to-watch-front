import { Link } from 'react-router-dom';
import SiteLogo from '../components/site-logo/site-logo';
import ReviewForm from '../components/review-form/review-form';
import { Film } from '../types/film';


type Props = {
  film: Film;
}


function AddReviewPage(props: Props): JSX.Element {
  const {film} = props;

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

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <a href='/' className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width={218} height={327} />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>
    </section>
  );
}

export default AddReviewPage;
