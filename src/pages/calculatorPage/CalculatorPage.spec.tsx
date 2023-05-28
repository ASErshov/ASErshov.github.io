import React from "react";
import { render } from "@testing-library/react";
import CalculatorPage from "./CalculatorPage";
import renderer from "react-test-renderer";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

jest.mock("./hooks/useCalculator", () => ({
  __esModule: true,
  default: () => ({
    results: { tip: "0.00", total: "0.00" },
    calculate: jest.fn(),
    reset: jest.fn(),
    isReset: false,
  }),
}));

it("Matches DOM Snapshot", () => {
  const domTree = renderer.create(<CalculatorPage />).toJSON();
  expect(domTree).toMatchSnapshot();
});

test("renders the CalculatorPage", () => {
  render(<CalculatorPage />);
});
