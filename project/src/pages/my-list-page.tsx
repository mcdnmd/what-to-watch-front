import List from '../components/list/list';
import SiteLogo from '../components/site-logo/site-logo';
import { Film } from '../types/film';
import UserProfileBlock from '../components/user-profile/user-profile';

type Props = {
  films: Film[];
}

function MyListPage(props: Props): JSX.Element {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <SiteLogo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserProfileBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <List films={films} />
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
