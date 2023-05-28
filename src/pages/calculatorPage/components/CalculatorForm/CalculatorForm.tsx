import React from "react";
import { Box, Button, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import { ReactComponent as DollarSvg } from "assets/icon-dollar.svg";
import { ReactComponent as PersonSVG } from "assets/icon-person.svg";
import styles from "./CalculatorForm.module.scss";

const CalculatorForm: React.FC = () => {
  const tips = [5, 10, 15, 25, 50];

  return (
    <form className={styles.mainWrapper}>
      <Typography className={styles.label} variant="body2" component="span" sx={{ color: "primary.dark" }}>
        Bill
      </Typography>
      <OutlinedInput
        id="bill"
        name="bill"
        placeholder="0"
        startAdornment={
          <InputAdornment position="start">
            <DollarSvg />
          </InputAdornment>
        }
        inputProps={{
          className: styles.input,
          sx: {
            color: "secondary.dark",
          },
        }}
        className={styles.inputWrapper}
        size="small"
        type="number"
        sx={{
          backgroundColor: "secondary.light",
        }}
      />
      <Typography className={styles.label} variant="body2" component="span" sx={{ color: "primary.dark" }}>
        Select Tip %
      </Typography>
      <Box className={styles.tipWrapper}>
        {tips.map((item) => (
          <Button
            className={styles.tipButton}
            key={item}
            sx={{
              color: "common.white",
              backgroundColor: "secondary.dark",
              "&:hover": {
                color: "secondary.dark",
                backgroundColor: "primary.main",
              },
            }}
            variant="contained"
          >{`${item}%`}</Button>
        ))}
        <OutlinedInput
          id="customTip"
          name="customTip"
          placeholder="Custom"
          className={`${styles.inputWrapper}  ${styles.tipButton}`}
          inputProps={{
            className: styles.input,
            sx: {
              "&::placeholder": {
                color: "secondary.dark",
              },
              color: "secondary.dark",
            },
          }}
          size="small"
          type="number"
          sx={{
            backgroundColor: "secondary.light",
          }}
        />
      </Box>
      <Typography className={styles.label} variant="body2" component="span" sx={{ color: "primary.dark" }}>
        Number of people
      </Typography>
      <OutlinedInput
        id="peopleNumber"
        name="peopleNumber"
        placeholder="0"
        startAdornment={
          <InputAdornment position="start">
            <PersonSVG />
          </InputAdornment>
        }
        className={styles.inputWrapper}
        inputProps={{
          className: styles.input,
          sx: {
            color: "secondary.dark",
          },
        }}
        size="small"
        type="number"
        sx={{
          backgroundColor: "secondary.light",
        }}
      />
    </form>
  );
};

export default CalculatorForm;
