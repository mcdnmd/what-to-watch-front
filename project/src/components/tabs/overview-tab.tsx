import {Film} from '../../types/film';

enum RatingTextual {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very Good',
  Awesome = 'Awesome'
}


type Props = {
  film: Film;
}

function OverviewTab(props: Props): JSX.Element {
  const {film} = props;
  const getTextRating = (rating: number): RatingTextual => {
    if (rating >= 0 && rating < 3){
      return RatingTextual.Bad;
    } else if (rating >= 3 && rating < 5) {
      return RatingTextual.Normal;
    } else if (rating >= 5 && rating < 8) {
      return RatingTextual.Good;
    } else if (rating >= 8 && rating < 10) {
      return RatingTextual.VeryGood;
    }

    return RatingTextual.Awesome;
  };
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getTextRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;
