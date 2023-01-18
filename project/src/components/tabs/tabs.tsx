import {Film} from '../../types/film';
import {useState} from 'react';
import {Tab} from '../../types/tab.enum';
import DetailTab from './detail-tab';
import ReviewsTab from './reviews-tab';
import OverviewTab from './overview-tab';
import { Review } from '../../types/review.type';

type Props = {
  film: Film;
  reviews: Review[];
}

function Tabs(props: Props): JSX.Element {
  const {film, reviews} = props;
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === Tab.OVERVIEW ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab(Tab.OVERVIEW)}>Overview</span>
          </li>
          <li className={`film-nav__item ${activeTab === Tab.DETAILS ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab(Tab.DETAILS)}>Details</span>
          </li>
          <li className={`film-nav__item ${activeTab === Tab.REVIEWS ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab(Tab.REVIEWS)}>Reviews</span>
          </li>
        </ul>
      </nav>

      {activeTab === Tab.DETAILS && (<DetailTab film={film}/>)}
      {activeTab === Tab.REVIEWS && (<ReviewsTab reviews={reviews}/>)}
      {activeTab === Tab.OVERVIEW && (<OverviewTab film={film} />)}
    </div>
  );
}

export default Tabs;
