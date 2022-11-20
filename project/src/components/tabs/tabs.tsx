import {Film} from '../../types/film';
import {useState} from 'react';
import {Tab} from '../../types/tab.enum';
import DetailTab from './detail-tab';
import ReviewsTab from './reviews-tab';
import {reviews} from '../../mocks/reviews.mock';
import OverviewTab from './overview-tab';

type Props = {
  film: Film;
}

function Tabs(props: Props): JSX.Element {
  const {film} = props;
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);

  const renderTab = () => {
    switch (activeTab) {
      case Tab.DETAILS:
        return <DetailTab film={film} />;
      case Tab.REVIEWS:
        return <ReviewsTab reviews={reviews} />;
      default:
        return <OverviewTab film={film} />;
    }
  };

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

      {
        renderTab()
      }
    </div>
  );
}

export default Tabs;
