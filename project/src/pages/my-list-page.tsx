import {Film} from '../types/film';
import List from '../components/list/list';
import SiteLogo from '../components/site-logo/site-logo';

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
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href='/'>Sign out</a>
          </li>
        </ul>
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
