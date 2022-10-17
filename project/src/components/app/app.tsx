import MainPage from '../../pages/main';
import {films} from '../../mocks/films.mock';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../../pages/sign-in';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list';
import MoviePage from '../../pages/movie-page';
import AddReview from '../../pages/add-review';
import Player from '../../pages/player';
import NotFound404 from '../../pages/404-not-found';


function App(): JSX.Element {
  const promoMovie = films[0];
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage films={films} promoMovie={promoMovie} />} />
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={AuthorizationStatus.NoAuth}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<MoviePage />}/>
        <Route path={AppRoute.AddReview} element={<AddReview />}/>
        <Route path={AppRoute.Player} element={<Player />}/>
        <Route path={AppRoute.NotFound} element={<NotFound404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
