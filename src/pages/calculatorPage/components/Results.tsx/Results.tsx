import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./Results.module.scss";

const Results: React.FC = () => {
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
            $0.00
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
            $0.00
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
      >
        RESET
      </Button>
    </Box>
  );
};

export default Results;
