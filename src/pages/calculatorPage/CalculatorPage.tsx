import { Box, Typography } from "@mui/material";
import React from "react";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import styles from "./CalculatorPage.module.scss";

const CalculatorPage: React.FC = () => {
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
        <CalculatorForm />
      </Box>
    </Box>
  );
};

export default CalculatorPage;
