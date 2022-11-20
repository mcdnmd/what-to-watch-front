import {Review} from '../../types/review.type';
import { format } from 'date-fns';

type Props = {
  review: Review;
}

function ReviewCard(props: Props): JSX.Element {
  const {review} = props;
  const reviewDate = new Date(review.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={format(reviewDate, 'yyyy-MM-dd')}>{format(reviewDate, 'MMMM dd, yyyy')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default ReviewCard;
