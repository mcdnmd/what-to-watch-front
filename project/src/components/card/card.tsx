import {Film} from '../../types/film';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {DELAY_BEFORE_PLAYING_PREVIEW} from '../../const';
import VideoPlayer from '../video-player/video-player';

type Props = {
  film: Film;
  setActiveCard: (film: Film) => void;
}

function Card(prop : Props): JSX.Element {
  const {film, setActiveCard} = prop;
  const [playing, setPlaying] = useState<boolean>(false);
  const [isStartToPlayPreview, setIsStartToPlayPreview] = useState<boolean>(false);

  useEffect(() => {
    let startPlaying = true;

    if (isStartToPlayPreview) {
      setTimeout(() => startPlaying && setPlaying(true), DELAY_BEFORE_PLAYING_PREVIEW);
    }
    return (() => {startPlaying = false;});
  }, [isStartToPlayPreview]);

  const handleMouseEnter = () => {
    setIsStartToPlayPreview(true);
    setActiveCard(film);
  };

  const handleMouseLeave = () => {
    setIsStartToPlayPreview(false);
    setPlaying(false);
    setActiveCard({} as Film);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        <VideoPlayer film={film} isPlaying={playing} isMuted width={280} height={175} />
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
