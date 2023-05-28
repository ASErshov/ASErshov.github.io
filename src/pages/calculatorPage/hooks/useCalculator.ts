import { useCallback, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { CalculatorValues, Results } from "../types";

interface Calculator {
  calculate: (values: CalculatorValues) => void;
  error: boolean;
  results: Results;
  reset: () => void;
  isReset: boolean;
}

const DEFAULT_RESULTS = { total: "0.00", tip: "0.00" };

const useCalculator = (): Calculator => {
  const [error, setError] = useState(false);
  const [results, setResults] = useState<Results>(DEFAULT_RESULTS);
  const [isReset, setIsReset] = useState(false);

  const calculate = useCallback((values: CalculatorValues): void => {
    if (values.peopleNumber && Number(values.peopleNumber)) {
      const total = (Number(values.bill) || 0) / Number(values.peopleNumber);
      const tip = (total / 100) * values.tip;
      setError(false);
      setResults({ tip: tip.toFixed(2).toString(), total: total.toFixed(2).toString() });
    } else {
      setError(true);
    }

    setIsReset(false);
  }, []);

  const reset = useCallback(() => {
    setResults(DEFAULT_RESULTS);
    setError(false);
    setIsReset(true);
  }, []);

  const debouncedCalculate = useDebouncedCallback(calculate, 300);

  return { calculate: debouncedCalculate, error, results, reset, isReset };
};

export default useCalculator;
