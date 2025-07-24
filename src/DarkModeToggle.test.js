// Make sure to check all edge cases.

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DarkModeToggle from "./DarkModeToggle";
import "@testing-library/jest-dom";

function getComputedBgColor(element) {
  return window.getComputedStyle(element).backgroundColor;
}
test("should render with light mode by default", () => {
  render(<DarkModeToggle />);
  const container = screen.getByText("Dark Mode Toggle").parentElement;

  expect(container.classList.contains("light-mode")).toBe(true);
  expect(screen.getByText("Light Mode")).toBeInTheDocument();
});

test("should toggle to dark mode on click", () => {
  render(<DarkModeToggle />);
  const checkbox = screen.getByRole("checkbox");
  const container = screen.getByText("Dark Mode Toggle").parentElement;

  fireEvent.click(checkbox);

  expect(container.classList.contains("dark-mode")).toBe(true);
  expect(screen.getByText("Dark Mode")).toBeInTheDocument();
});

test("should toggle back to light mode on second click", () => {
  render(<DarkModeToggle />);
  const checkbox = screen.getByRole("checkbox");
  const container = screen.getByText("Dark Mode Toggle").parentElement;

  fireEvent.click(checkbox); // to dark
  fireEvent.click(checkbox); // back to light

  expect(container.classList.contains("light-mode")).toBe(true);
  expect(screen.getByText("Light Mode")).toBeInTheDocument();
});
