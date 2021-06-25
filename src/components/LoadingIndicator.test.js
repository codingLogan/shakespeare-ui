import { render, screen } from "@testing-library/react";
import LoadingIndicator from "./LoadingIndicator";

test("renders learn react link", () => {
  render(<LoadingIndicator />);
  const loaderText = screen.getByText(/Loading Reviews.../i);
  expect(loaderText).toBeInTheDocument();
});
