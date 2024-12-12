import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

test("Banner displays current time", () => {
  render(<Banner mainMessage="Test" subMessage="Test" sideBar={true} />);
  const timeElement = screen.getByTestId("time-displaying");
  expect(timeElement).toBeInTheDocument();
  expect(timeElement.textContent).toMatch(/\d{1,2}:\d{2}:\d{2}/);
});
