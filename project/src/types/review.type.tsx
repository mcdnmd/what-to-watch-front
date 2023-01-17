import { ReviewUser } from './user.type';

export type Review = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: ReviewUser
}
