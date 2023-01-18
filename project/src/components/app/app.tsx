import MainPage from '../../pages/main-page';
import { Route, Routes } from 'react-router-dom';
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
import browserHistory from '../../browser-history';
import HsitoryRouter from '../history-router/history-router';

function App(): JSX.Element {
  const { isDataLoaded, authorizationStatus } = useAppSelector((state) => state);
  if (!isDataLoaded){
    return <Loader />;
  }

  return (
    <HsitoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={authorizationStatus}>
            <MyListPage />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<FilmPage />}/>
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute authStatus={authorizationStatus}>
            <AddReviewPage />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<PlayerPage />}/>
        <Route path={AppRoute.NotFound} element={<NotFound404 />}/>
      </Routes>
    </HsitoryRouter>
  );
}

export default App;
