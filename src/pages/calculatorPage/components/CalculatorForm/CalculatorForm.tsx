import React, { useEffect, useRef, useState } from "react";
import { Box, Button, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import { ReactComponent as DollarSvg } from "assets/icon-dollar.svg";
import { ReactComponent as PersonSVG } from "assets/icon-person.svg";
import { CalculatorValues } from "pages/calculatorPage/types";
import styles from "./CalculatorForm.module.scss";

interface Props {
  calculate: (value: CalculatorValues) => void;
  error?: boolean;
  isReset?: boolean;
}

const CalculatorForm: React.FC<Props> = ({ calculate, error, isReset }) => {
  const tips = [5, 10, 15, 25, 50];

  const submitRef = useRef<HTMLInputElement>(null);
  const [tip, setTip] = useState<number>(0);
  const [customTip, setCustomTip] = useState<string | undefined>("");
  const [peopleNumber, setPeopleNumber] = useState<string>("");
  const [bill, setBill] = useState<string>("");

  useEffect(() => {
    if (isReset) {
      setCustomTip("");
      setTip(0);
      setPeopleNumber("");
      setBill("");
    }
  }, [isReset]);

  const handleChange = (): void => {
    submitRef.current?.click();
  };

  const handleTipClick = async (value: number): Promise<void> => {
    await setTip(value);
    setCustomTip("");
    handleChange();
  };

  const handleChangeCustomTip = async ({ target: { value } }: { target: { value: string } }): Promise<void> => {
    await setTip(Number(value));
    setCustomTip(value);
    handleChange();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData);
    calculate({ ...formProps, tip });
  };

  return (
    <form className={styles.mainWrapper} onSubmit={handleSubmit}>
      <Typography className={styles.label} variant="body2" component="span" sx={{ color: "primary.dark" }}>
        Bill
      </Typography>
      <OutlinedInput
        id="bill"
        name="bill"
        data-testid="bill"
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
        onChange={({ target: { value } }): void => {
          setBill(value);
          handleChange();
        }}
        value={bill}
      />
      <Typography className={styles.label} variant="body2" component="span" sx={{ color: "primary.dark" }}>
        Select Tip %
      </Typography>
      <Box className={styles.tipWrapper}>
        {tips.map((item) => (
          <Button
            className={styles.tipButton}
            key={item}
            onClick={(): void => {
              handleTipClick(item);
            }}
            sx={{
              color: `${tip === item ? "secondary.dark" : "common.white"}`,
              backgroundColor: `${tip === item ? "primary.main" : "secondary.dark"}`,
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
          data-testid="customTip"
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
          onChange={handleChangeCustomTip}
          value={customTip}
        />
      </Box>
      <div className={`${styles.peopleLableWrapper} ${styles.label}`}>
        <Typography variant="body2" component="span" sx={{ color: "primary.dark" }}>
          Number of people
        </Typography>
        {error && (
          <Typography variant="body2" component="span" sx={{ color: "red" }}>
            Can't be zero
          </Typography>
        )}
      </div>
      <OutlinedInput
        id="peopleNumber"
        name="peopleNumber"
        data-testid="peopleNumber"
        placeholder="0"
        startAdornment={
          <InputAdornment position="start">
            <PersonSVG />
          </InputAdornment>
        }
        className={`${styles.inputWrapper} ${error ? styles.error : ""}`}
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
        onChange={({ target: { value } }): void => {
          setPeopleNumber(value);
          handleChange();
        }}
        value={peopleNumber}
      />
      <input style={{ display: "none" }} type="submit" ref={submitRef} />
    </form>
  );
};

export default CalculatorForm;
