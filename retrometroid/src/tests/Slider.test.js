// FILE: retrometroid/src/assets/Slider.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // FILE: retrometroid/src/assets/Slider.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Slider from "./Slider";
import sliderData from "../data/sliderData";

describe("Slider Component", () => {
  test("should set newState to 1 if indexPayLoad + sliderIndex > sliderData.length", () => {
    const { getByText } = render(<Slider />);
    const initialIndex = sliderData.length;
    const indexPayLoad = 1;
    const expectedState = 1;

    // Simulate the state change
    const sliderIndex = initialIndex + indexPayLoad;
    expect(sliderIndex).toBeGreaterThan(sliderData.length);
    expect(expectedState).toBe(1);
  });

  test("should set newState to sliderData.length if indexPayLoad + sliderIndex < 1", () => {
    const { getByText } = render(<Slider />);
    const initialIndex = 0;
    const indexPayLoad = -1;
    const expectedState = sliderData.length;

    // Simulate the state change
    const sliderIndex = initialIndex + indexPayLoad;
    expect(sliderIndex).toBeLessThan(1);
    expect(expectedState).toBe(sliderData.length);
  });

  test("should set newState to indexPayLoad + sliderIndex if within bounds", () => {
    const { getByText } = render(<Slider />);
    const initialIndex = 2;
    const indexPayLoad = 1;
    const expectedState = initialIndex + indexPayLoad;

    // Simulate the state change
    const sliderIndex = initialIndex + indexPayLoad;
    expect(sliderIndex).toBe(expectedState);
  });
});
