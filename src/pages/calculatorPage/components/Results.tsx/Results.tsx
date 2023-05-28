import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Results as ResultsType } from "pages/calculatorPage/types";
import styles from "./Results.module.scss";

interface Props {
  results: ResultsType;
  reset: () => void;
}

const Results: React.FC<Props> = ({ results, reset }) => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.dark",
      }}
      className={styles.mainWrapper}
    >
      <div>
        <div className={styles.resultWrapper}>
          <div className={styles.titleWrapper}>
            <Typography variant="body2" component="span" sx={{ color: "common.white" }}>
              Tip Amount
            </Typography>
            <Typography variant="body2" component="span" sx={{ color: "primary.dark", fontSize: 14 }}>
              /person
            </Typography>
          </div>
          <Typography className={styles.label} variant="h2" component="span" sx={{ color: "primary.main" }}>
            {`$  ${results.tip}`}
          </Typography>
        </div>
        <div className={styles.resultWrapper}>
          <div className={styles.titleWrapper}>
            <Typography variant="body2" component="span" sx={{ color: "common.white" }}>
              Total
            </Typography>
            <Typography variant="body2" component="span" sx={{ color: "primary.dark", fontSize: 14 }}>
              / person
            </Typography>
          </div>
          <Typography className={styles.label} variant="h2" component="span" sx={{ color: "primary.main" }}>
            {`$ ${results.total}`}
          </Typography>
        </div>
      </div>
      <Button
        className={styles.resultButton}
        sx={{
          color: "secondary.dark",
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.light",
          },
          "&:disabled": {
            backgroundColor: "primary.dark",
            opacity: "0.5",
          },
          fontSize: 20,
        }}
        variant="contained"
        onClick={reset}
      >
        RESET
      </Button>
    </Box>
  );
};

export default Results;
