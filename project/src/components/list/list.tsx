import Card from '../card/card';
import { useState } from 'react';
import { Film } from '../../types/film';

type Props = {
  films: Film[];
};


function List(props: Props): JSX.Element {
  const {films} = props ;
  const [, setActiveCard] = useState({});

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => <Card key={film.id} film={film} setActiveCard={setActiveCard} />)
      }
    </div>
  );
}

export default List;
