import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CalculatorForm from "./CalculatorForm";
import renderer from "react-test-renderer";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

it("Matches DOM Snapshot", () => {
  const MOCKED_CALCULATE = jest.fn();
  const domTree = renderer.create(<CalculatorForm calculate={MOCKED_CALCULATE} />).toJSON();
  expect(domTree).toMatchSnapshot();
});

test("renders the CalculatorForm", () => {
  const MOCKED_CALCULATE = jest.fn();
  render(<CalculatorForm calculate={MOCKED_CALCULATE} />);
  expect(screen.getByText("Bill")).toBeInTheDocument();
  expect(screen.getByText("Select Tip %")).toBeInTheDocument();
  expect(screen.getByText("Number of people")).toBeInTheDocument();
});

test("render with isRest", () => {
  const MOCKED_CALCULATE = jest.fn();
  render(<CalculatorForm calculate={MOCKED_CALCULATE} isReset={true} />);
  expect(screen.getByTestId("bill").getElementsByTagName("input").item(0)).toHaveDisplayValue("");
  expect(screen.getByTestId("customTip").getElementsByTagName("input").item(0)).toHaveDisplayValue("");
  expect(screen.getByTestId("peopleNumber").getElementsByTagName("input").item(0)).toHaveDisplayValue("");
});

test("render with error", () => {
  const MOCKED_CALCULATE = jest.fn();
  render(<CalculatorForm calculate={MOCKED_CALCULATE} error={true} />);
  expect(screen.getByText("Can't be zero")).toBeInTheDocument();
});

test("change functions test", async () => {
  const MOCKED_CALCULATE = jest.fn();
  render(<CalculatorForm calculate={MOCKED_CALCULATE} />);

  const billInput = screen.getByTestId("bill").getElementsByTagName("input").item(0);
  billInput && fireEvent.change(billInput, { target: { value: "123" } });
  expect(billInput).toHaveDisplayValue("123");
  expect(MOCKED_CALCULATE.mock.calls.length).toBe(1);

  const tipButton = screen.getByText("10%");
  tipButton && fireEvent.click(tipButton, {});
  await waitFor(() => expect(MOCKED_CALCULATE.mock.calls.length).toBe(2));

  const customTipInput = screen.getByTestId("customTip").getElementsByTagName("input").item(0);
  customTipInput && fireEvent.change(customTipInput, { target: { value: "123" } });
  await waitFor(() => expect(customTipInput).toHaveDisplayValue("123"));

  expect(MOCKED_CALCULATE.mock.calls.length).toBe(3);
  customTipInput && fireEvent.change(customTipInput, { target: { value: "" } });
  await waitFor(() => expect(customTipInput).toHaveDisplayValue(""));
  expect(MOCKED_CALCULATE.mock.calls.length).toBe(4);

  const peopleNumberInput = screen.getByTestId("peopleNumber").getElementsByTagName("input").item(0);
  peopleNumberInput && fireEvent.change(peopleNumberInput, { target: { value: "123" } });
  expect(peopleNumberInput).toHaveDisplayValue("123");
  expect(MOCKED_CALCULATE.mock.calls.length).toBe(5);
});
