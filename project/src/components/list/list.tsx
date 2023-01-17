import Card from '../card/card';
import {useState} from 'react';
import {useAppSelector} from '../../hooks/store-handler';

function List(): JSX.Element {
  const {filmList} = useAppSelector((state) => state);
  const [, setActiveCard] = useState({});

  return (
    <div className="catalog__films-list">
      {filmList.map((film) => <Card key={film.id} film={film} setActiveCard={setActiveCard} />)}
    </div>
  );
}

export default List;
