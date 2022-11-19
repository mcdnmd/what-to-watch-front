import {Film} from '../../types/film';
import {Link} from 'react-router-dom';

type Props = {
  film: Film;
  setActiveCard: (film: Film) => void;
}

function Card(prop : Props): JSX.Element {
  const {film, setActiveCard} = prop;

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveCard(film)}
      onMouseLeave={() => setActiveCard({} as Film)}
    >
      <div className="small-film-card__image">
        <img src={film.posterImage} alt={film.name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className={'small-film-card__link'}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default Card;
