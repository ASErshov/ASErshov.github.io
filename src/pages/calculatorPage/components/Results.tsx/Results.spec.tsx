import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Results from "./Results";
import renderer from "react-test-renderer";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

it("Matches DOM Snapshot", () => {
  const MOCKED_RESULTS = { tip: "0.00", total: "0.00" };
  const MOCKED_RESET = jest.fn();
  const domTree = renderer.create(<Results results={MOCKED_RESULTS} reset={MOCKED_RESET} />).toJSON();
  expect(domTree).toMatchSnapshot();
});

test("renders the Results", () => {
  const MOCKED_RESULTS = { tip: "0.00", total: "0.00" };
  const MOCKED_RESET = jest.fn();
  render(<Results results={MOCKED_RESULTS} reset={MOCKED_RESET} />);
  expect(screen.getByText("Tip Amount")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getByText("RESET")).toBeInTheDocument();
});

test("change functions test", () => {
  const MOCKED_RESULTS = { tip: "1.00", total: "1.00" };
  const MOCKED_RESET = jest.fn();
  render(<Results results={MOCKED_RESULTS} reset={MOCKED_RESET} />);
  expect(screen.getAllByText("$ 1.00").length).toBe(2);

  const resetButton = screen.getByText("RESET");
  resetButton && fireEvent.click(resetButton, {});
});
