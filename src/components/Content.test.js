import { render, screen } from "@testing-library/react";
import Content from "./Content";

test("renders learn react link", () => {
  render(<Content>Some Content</Content>);
  const contentNode = screen.getByText(/Some Content/i);
  expect(contentNode).toBeInTheDocument();
});
