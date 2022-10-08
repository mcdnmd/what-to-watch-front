export type FilmProp = {
  name: string;
  imageUrl: string;
}

export function Card({name, imageUrl} : FilmProp): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imageUrl} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          { name }
        </a>
      </h3>
    </article>
  );
}
