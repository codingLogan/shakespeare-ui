import { render, screen } from "@testing-library/react";
import App from "./App";
import * as hooks from "./data/shakespeare.hooks";

jest.mock("./data/shakespeare.hooks");

test("renders learn react link", () => {
  hooks.useReviews.mockImplementation(() => {
    return { reviewsLoading: false, reviews: [], average: 0 };
  });
  render(<App />);
  const linkElement = screen.getByText(/Shakespeare Reviews/i);
  expect(linkElement).toBeInTheDocument();
});
