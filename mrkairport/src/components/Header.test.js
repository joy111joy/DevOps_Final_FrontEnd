import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

test("Header contains all navigation links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByText("Flight List")).toBeInTheDocument();
  expect(screen.getByText("Airport Guide")).toBeInTheDocument();
  expect(screen.getByText("Administration")).toBeInTheDocument();
});
