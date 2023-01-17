import MainPage from '../../pages/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import SignIn from '../../pages/sign-in';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page';
import FilmPage from '../../pages/film-page';
import AddReviewPage from '../../pages/add-review-page';
import PlayerPage from '../../pages/player-page';
import NotFound404 from '../../pages/404-not-found';
import { useAppSelector } from '../../hooks/store-handler';
import Loader from '../loader/loader';

function App(): JSX.Element {
  const { isDataLoaded, filmList, authorizationStatus } = useAppSelector((state) => state);
  if (!isDataLoaded){
    return <Loader />;
  }
  const promoFilm = filmList[0];
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage promoFilm={promoFilm} />} />
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={authorizationStatus}>
            <MyListPage films={filmList} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<FilmPage film={promoFilm} films={filmList}/>}/>
        <Route path={AppRoute.AddReview} element={<AddReviewPage film={promoFilm}/>}/>
        <Route path={AppRoute.Player} element={<PlayerPage film={promoFilm}/>}/>
        <Route path={AppRoute.NotFound} element={<NotFound404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
