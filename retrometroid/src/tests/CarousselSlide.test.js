import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Slider from "./CarousselSlide";

describe("Slider Component", () => {
  beforeEach(() => {
    render(<Slider />);
  });

  test("renders the initial slide correctly", () => {
    expect(screen.getByText("PS VITA OLED")).toBeInTheDocument();
    expect(screen.getByText("De nouvelles possibilités")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "HOME_NDSL-02.png"
    );
  });

  test("changes to the next slide when right arrow is clicked", () => {
    fireEvent.click(screen.getByText(">"));
    expect(screen.getByText("NDS LITE")).toBeInTheDocument();
    expect(screen.getByText("De nouveaux horizons")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "HOME-SCREEN-Desktop-CLEAN-02.png"
    );
  });

  test("changes to the previous slide when left arrow is clicked", () => {
    fireEvent.click(screen.getByText(">")); // Move to the second slide first
    fireEvent.click(screen.getByText("<"));
    expect(screen.getByText("PS VITA OLED")).toBeInTheDocument();
    expect(screen.getByText("De nouvelles possibilités")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "HOME_NDSL-02.png"
    );
  });

  test("loops to the last slide when left arrow is clicked on the first slide", () => {
    fireEvent.click(screen.getByText("<"));
    expect(screen.getByText("NDS LITE")).toBeInTheDocument();
    expect(screen.getByText("De nouveaux horizons")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "HOME-SCREEN-Desktop-CLEAN-02.png"
    );
  });

  test("loops to the first slide when right arrow is clicked on the last slide", () => {
    fireEvent.click(screen.getByText(">")); // Move to the second slide first
    fireEvent.click(screen.getByText(">"));
    expect(screen.getByText("PS VITA OLED")).toBeInTheDocument();
    expect(screen.getByText("De nouvelles possibilités")).toBeInTheDocument();
    expect(screen.getByAltText("slider-img")).toHaveAttribute(
      "src",
      "HOME_NDSL-02.png"
    );
  });
});
