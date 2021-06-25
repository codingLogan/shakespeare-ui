import { render, screen } from "@testing-library/react";
import { Review } from "./Review";

test("renders learn react link", () => {
  const review = {
    author: "Test Author",
    body: "Some great body text for a review",
    id: "very unique",
    publish_date: "2016-09-05T23:25:47.642350Z",
    rating: 5.0,
  };

  const expectedDateConversion = "Mon Sep 05 2016";

  render(<Review review={review} />);

  const ReviewNode = screen.getByText(review.author);
  expect(ReviewNode).toBeInTheDocument();

  const bodyNode = screen.getByText(review.body);
  expect(bodyNode).toBeInTheDocument();

  const ratingNode = screen.getByText("Rating: " + review.rating.toString());
  expect(ratingNode).toBeInTheDocument();

  const dateNode = screen.getByText(expectedDateConversion);
  expect(dateNode).toBeInTheDocument();
});
