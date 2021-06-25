import { useEffect, useState } from "react";
import { getAllReviews, getReview } from "./shakespeare.api";

/**
 *
 * @param {{rating: number}[]} reviews array
 * @returns {number} average
 */
function getReviewAverage(reviews) {
  const sumOfReviews = reviews.reduce(
    (previousValue, review) => (previousValue += review.rating),
    0
  );

  return sumOfReviews / reviews.length;
}

export function useReviews() {
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [average, setAverage] = useState(0);
  useEffect(() => {
    getAllReviews().then((reviews) => {
      setReviews(reviews);
      setReviewsLoading(false);
      const averageRating = getReviewAverage(reviews);
      setAverage(averageRating);
    });
  }, []);

  return { reviewsLoading, reviews, average };
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
