import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CarousselDiviser } from "./CarousselDiviser";

describe("CarousselDiviser", () => {
  beforeEach(() => {
    render(<CarousselDiviser />);
  });

  test("renders the first slide initially", () => {
    expect(screen.getByText("PS VITA OLED")).toBeInTheDocument();
    expect(screen.getByText("De nouvelles possibilités")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "telechargementImage"
    );
  });

  test("shows the next slide when the right arrow is clicked", () => {
    fireEvent.click(screen.getByText(">"));
    expect(screen.getByText("NDS LITE")).toBeInTheDocument();
    expect(screen.getByText("De nouveaux horizons")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "telechargementImage1"
    );
  });

  test("shows the previous slide when the left arrow is clicked", () => {
    fireEvent.click(screen.getByText("<"));
    expect(screen.getByText("NDS LITE")).toBeInTheDocument();
    expect(screen.getByText("De nouveaux horizons")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "telechargementImage1"
    );
  });

  test("wraps around to the last slide when the left arrow is clicked on the first slide", () => {
    fireEvent.click(screen.getByText("<"));
    expect(screen.getByText("NDS LITE")).toBeInTheDocument();
    expect(screen.getByText("De nouveaux horizons")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "telechargementImage1"
    );
  });

  test("wraps around to the first slide when the right arrow is clicked on the last slide", () => {
    fireEvent.click(screen.getByText(">"));
    fireEvent.click(screen.getByText(">"));
    expect(screen.getByText("PS VITA OLED")).toBeInTheDocument();
    expect(screen.getByText("De nouvelles possibilités")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "telechargementImage"
    );
  });
});
