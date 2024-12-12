import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const mockToggle = jest.fn();
  const defaultProps = {
    title: "Test Dropdown",
    isOpen: false,
    toggleDropdown: mockToggle,
    children: <div>Test Content</div>,
  };

  test("renders dropdown with title", () => {
    render(<Dropdown {...defaultProps} />);
    expect(screen.getByText("Test Dropdown")).toBeInTheDocument();
  });

  test("toggles content when button is clicked", () => {
    render(<Dropdown {...defaultProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockToggle).toHaveBeenCalled();
  });

  test("shows content when isOpen is true", () => {
    render(<Dropdown {...defaultProps} isOpen={true} />);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("hides content when isOpen is false", () => {
    render(<Dropdown {...defaultProps} isOpen={false} />);
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });
});
