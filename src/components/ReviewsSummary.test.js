import { render, screen } from "@testing-library/react";
import ReviewsSummary from "./ReviewsSummary";

test("renders learn react link", () => {
  const average = 2.5644;
  const reviewsNumber = 100;

  render(<ReviewsSummary average={average} reviewsNumber={reviewsNumber} />);

  const avgNode = screen.getByText("Average Rating: 2.56");
  expect(avgNode).toBeInTheDocument();

  const totalNode = screen.getByText("Total Reviews: 100");
  expect(totalNode).toBeInTheDocument();
});
