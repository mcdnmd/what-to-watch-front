import {Film} from '../../types/film';

type Props = {
  film: Film;
}

function Card(prop : Props): JSX.Element {
  const {film} = prop;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.imageUrl} alt={film.name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {film.name}
        </a>
      </h3>
    </article>
  );
}

export default Card;
