import { Film } from '../../types/film.js';
import Card from '../card/card';
import {useState} from 'react';

type Props = {
  films: Film[];
}

function List(prop: Props): JSX.Element {
  const {films} = prop;
  const [, setActiveCard] = useState({});

  return (
    <div className="catalog__films-list">
      {films.map((film) => <Card key={film.id} film={film} setActiveCard={setActiveCard} />)}
    </div>
  );
}

export default List;
