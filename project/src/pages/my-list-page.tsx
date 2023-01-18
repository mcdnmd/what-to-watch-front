import List from '../components/list/list';
import SiteLogo from '../components/site-logo/site-logo';
import UserProfileBlock from '../components/user-profile/user-profile';
import { useAppSelector } from '../hooks/store-handler';


function MyListPage(): JSX.Element {
  const { favoriteFilms } = useAppSelector((state) => state);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <SiteLogo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <UserProfileBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <List films={favoriteFilms} />
      </section>

      <footer className="page-footer">
        <SiteLogo light/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListPage;
