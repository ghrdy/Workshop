import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ImageSlider from "../components/LimitedEditions";

describe("ImageSlider Component", () => {
  test("renders correctly with initial state", () => {
    render(<ImageSlider />);
    const firstImage = screen.getByAltText("GAMEBOY COLOR X OPTIMUS PRIME");
    const secondImage = screen.getByAltText("GAMEBOY COLOR X DELOREAN");

    expect(firstImage).toBeInTheDocument();
    expect(secondImage).toBeInTheDocument();
    expect(firstImage.closest("div")).toHaveClass("slide active");
    expect(secondImage.closest("div")).toHaveClass("slide next");
  });

  test("Next button works correctly", () => {
    render(<ImageSlider />);
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    const firstImage = screen.getByAltText("GAMEBOY COLOR X OPTIMUS PRIME");
    const secondImage = screen.getByAltText("GAMEBOY COLOR X DELOREAN");

    expect(firstImage.closest("div")).toHaveClass("slide previous");
    expect(secondImage.closest("div")).toHaveClass("slide active");
  });

  test("Class names are applied correctly", () => {
    render(<ImageSlider />);
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    const firstImage = screen.getByAltText("GAMEBOY COLOR X OPTIMUS PRIME");
    const secondImage = screen.getByAltText("GAMEBOY COLOR X DELOREAN");

    expect(firstImage.closest("div")).toHaveClass("slide previous");
    expect(secondImage.closest("div")).toHaveClass("slide active");

    fireEvent.click(nextButton);

    expect(firstImage.closest("div")).toHaveClass("slide next");
    expect(secondImage.closest("div")).toHaveClass("slide previous");
  });

  test("renders all images", () => {
    render(<ImageSlider />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(3); // Assuming there are 3 images
  });

  test("Next button cycles through images", () => {
    render(<ImageSlider />);
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    const firstImage = screen.getByAltText("GAMEBOY COLOR X OPTIMUS PRIME");
    expect(firstImage.closest("div")).toHaveClass("slide active");
  });
});
