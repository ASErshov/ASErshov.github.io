import { renderHook, act, waitFor } from "@testing-library/react";
import useCalculator from "./useCalculator";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

test(" useCalculator", async () => {
  const { result } = renderHook(() => useCalculator());

  expect(result.current.error).toBe(false);
  expect(result.current.isReset).toBe(false);
  expect(result.current.results).toStrictEqual({ total: "0.00", tip: "0.00" });
  expect(typeof result.current.calculate).toBe("function");
  expect(typeof result.current.reset).toBe("function");

  act(() => {
    result.current.calculate({ bill: "20", tip: 10, peopleNumber: "" });
  });
  await waitFor(() => {
    expect(result.current.error).toBe(true);
  });
  expect(result.current.isReset).toBe(false);
  expect(result.current.results).toStrictEqual({ total: "0.00", tip: "0.00" });

  act(() => {
    result.current.calculate({ bill: "20", tip: 10, peopleNumber: "2" });
  });
  await waitFor(() => {
    expect(result.current.error).toBe(false);
  });
  expect(result.current.isReset).toBe(false);
  expect(result.current.results).toStrictEqual({ total: "10.00", tip: "1.00" });

  act(() => {
    result.current.calculate({ bill: "", tip: 10, peopleNumber: "2" });
  });
  await waitFor(() => {
    expect(result.current.error).toBe(false);
  });
  expect(result.current.isReset).toBe(false);
  expect(result.current.results).toStrictEqual({ total: "10.00", tip: "1.00" });

  act(() => {
    result.current.reset();
  });
  expect(result.current.isReset).toBe(true);
});
