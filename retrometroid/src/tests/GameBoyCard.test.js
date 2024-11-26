// FILE: retrometroid/src/components/GameBoyCard.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import GameBoyCard from "./GameBoyCard";

describe("GameBoyCard Component", () => {
  const props = {
    title: "Test Title",
    subtitle: "Test Subtitle",
    imageUrl: "test-image-url.jpg",
  };

  test("renders GameBoyCard component", () => {
    render(<GameBoyCard {...props} />);
    const cardElement = screen.getByRole("img", { name: /test title/i });
    expect(cardElement).toBeInTheDocument();
  });

  test("displays the correct title", () => {
    render(<GameBoyCard {...props} />);
    const titleElement = screen.getByText(/test title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("displays the correct subtitle", () => {
    render(<GameBoyCard {...props} />);
    const subtitleElement = screen.getByText(/test subtitle/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test("displays the correct image with src and alt attributes", () => {
    render(<GameBoyCard {...props} />);
    const imageElement = screen.getByRole("img", { name: /test title/i });
    expect(imageElement).toHaveAttribute("src", "test-image-url.jpg");
    expect(imageElement).toHaveAttribute("alt", "Test Title");
  });

  test("displays the button with correct text", () => {
    render(<GameBoyCard {...props} />);
    const buttonElement = screen.getByText(/personnaliser/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
