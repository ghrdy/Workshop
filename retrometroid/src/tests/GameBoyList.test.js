// FILE: retrometroid/src/components/GameBoyList.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react"; // FILE: retrometroid/src/components/GameBoyList.test.jsx

import "@testing-library/jest-dom/extend-expect";
import GameboyList from "./GameBoyList";

describe("GameboyList Component", () => {
  test("renders GameboyList component", () => {
    render(<GameboyList />);
    const gameboyListElement = screen.getByRole("list");
    expect(gameboyListElement).toBeInTheDocument();
  });

  test("renders correct number of GameboyCard components", () => {
    render(<GameboyList />);
    const gameboyCardElements = screen.getAllByRole("listitem");
    expect(gameboyCardElements.length).toBe(4);
  });

  test("each GameboyCard receives correct props", () => {
    render(<GameboyList />);
    const gameboyData = [
      {
        title: "GAMEBOY COLOR",
        subtitle: "LE PLUS GRAND ÉCRAN",
        imageUrl: "GB-Console-isole.png",
      },
      {
        title: "GAMEBOY ADVANCE",
        subtitle: "LA PLUS POLYVALENTE",
        imageUrl: "GBA-Console-isole.png",
      },
      {
        title: "ADVANCE SP",
        subtitle: "LA PLUS PRATIQUE",
        imageUrl: "GBASP-Console-isole.png",
      },
      {
        title: "GAMEBOY DMG",
        subtitle: "L'ORIGINALE",
        imageUrl: "GBC-Console-isole.png",
      },
    ];

    gameboyData.forEach((gameboy, index) => {
      const titleElement = screen.getByText(gameboy.title);
      const subtitleElement = screen.getByText(gameboy.subtitle);
      const imageElement = screen.getByAltText(gameboy.title);

      expect(titleElement).toBeInTheDocument();
      expect(subtitleElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", gameboy.imageUrl);
    });
  });
});
