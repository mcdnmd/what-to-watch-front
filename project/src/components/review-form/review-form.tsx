import {ChangeEvent, useState} from 'react';
import { ReviewData } from '../../types/review-data.type.';
import RatingStar from './rating-star';
import { MAX_RATING } from '../../const';

type Props = {
  disabled: boolean;
  onSubmit: (reviewData: ReviewData) => void;
}

function ReviewForm(props: Props) {
  const { disabled, onSubmit } = props;
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({text: reviewText, rating: rating});
  };

  const ratings: JSX.Element[] = [...Array(MAX_RATING)] // eslint-disable-line @typescript-eslint/no-unsafe-assignment
    .map((_, idx) =>
      (
        <RatingStar
          key={idx} // eslint-disable-line react/no-array-index-key
          score={idx + 1}
          isChosen={rating === (idx + 1)}
          onChange={handleRatingChange}
        />
      )
    );

  const isSubmitButtonDisabled = reviewText.length < 50 || reviewText.length > 400 || disabled;

  return (
    <form action="#" className="add-review__form" onSubmit={handleReviewSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratings}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          disabled={disabled}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={reviewText}
          onChange={handleReviewTextChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitButtonDisabled}>Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
