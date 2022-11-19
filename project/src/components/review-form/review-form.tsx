import {ChangeEvent, useState} from 'react';

type ReviewFormValue = {
  startCount: number;
  reviewText: string;
}

function ReviewForm() {
  const [formValue, setFormValue] = useState<ReviewFormValue>({
    startCount:0,
    reviewText: ''
  });

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      reviewText: event.target.value
    }));
  };

  const handleReviewStartChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      startCount: Number(event.target.value)
    }));
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((i) => (
              <span key={i}>
                <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={i + 1} checked={formValue.startCount === i + 1} onChange={handleReviewStartChange}/>
                <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
              </span>
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={formValue.reviewText} onChange={handleReviewTextChange}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
