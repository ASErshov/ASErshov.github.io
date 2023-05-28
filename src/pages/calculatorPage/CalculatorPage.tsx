import { Box, Typography } from "@mui/material";
import React from "react";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import styles from "./CalculatorPage.module.scss";
import Results from "./components/Results.tsx/Results";
import useCalculator from "./hooks/useCalculator";

const CalculatorPage: React.FC = () => {
  const { calculate, error, results, reset, isReset } = useCalculator();

  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
      }}
      className={styles.mainWrapper}
    >
      <Typography variant="body1" component="h1" className={styles.title} sx={{ color: "primary.dark" }}>
        SPLI
      </Typography>
      <Typography variant="body1" component="h1" className={styles.title} sx={{ color: "primary.dark" }}>
        TTER
      </Typography>
      <Box
        className={styles.calculatorWrapper}
        sx={{
          backgroundColor: "common.white",
        }}
      >
        <CalculatorForm calculate={calculate} error={error} isReset={isReset} />
        <Results results={results} reset={reset} />
      </Box>
    </Box>
  );
};

export default CalculatorPage;
