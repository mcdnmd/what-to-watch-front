import MainPage from '../../pages/main-page';
import {films} from '../../mocks/films.mock';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import SignIn from '../../pages/sign-in';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page';
import FilmPage from '../../pages/film-page';
import AddReviewPage from '../../pages/add-review-page';
import PlayerPage from '../../pages/player-page';
import NotFound404 from '../../pages/404-not-found';

function App(): JSX.Element {
  const promoMovie = films[0];
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage films={films} promoFilm={promoMovie} />} />
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={AuthorizationStatus.NoAuth}>
            <MyListPage films={films.slice(8)}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<FilmPage films={films}/>}/>
        <Route path={AppRoute.AddReview} element={<AddReviewPage />}/>
        <Route path={AppRoute.Player} element={<PlayerPage />}/>
        <Route path={AppRoute.NotFound} element={<NotFound404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
