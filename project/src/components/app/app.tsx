import MainPage from '../../pages/main';
import { films } from '../../mocks/films.mock';


function App(): JSX.Element {
  const promoMovie = films[0];
  return (
    <MainPage
      films={films}
      promoMovie={promoMovie}
    />
  );
}

export default App;
