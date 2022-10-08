import MainPage from '../../pages/main';
import {films} from '../../mocks/films.mock';


function App(): JSX.Element {
  return (
    <MainPage
      films={films}
      limit={films.length}
      promoMovieName={'The Grand Budapest Hotel'}
      promoMovieGenre={'Drama'}
      promoMovieCreationYear={2014}
    />
  );
}

export default App;
