import { useEffect, useState } from "react";
import { getAllReviews, getReview } from "./shakespeare.api";

export function useReviews() {
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getAllReviews().then((reviews) => {
      setReviews(reviews);
      setReviewsLoading(false);
    });
  }, []);

  return { reviewsLoading, reviews };
}

export function useReview(id) {
  const [reviewLoading, setReviewLoading] = useState(true);
  const [review, setReview] = useState([]);
  useEffect(() => {
    getReview().then((review) => {
      setReviewLoading(false);
      setReview(review);
    });
  }, [id]);

  return { reviewLoading, review };
}
