import React, { Suspense } from "react";
import { Box, CircularProgress, createTheme } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CalculatorPage from "pages/calculatorPage/CalculatorPage";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "hsl(172, 67%, 45%)", light: "hsl(185, 41%, 84%)", dark: "hsl(186, 14%, 43%)" },
    common: { white: "hsl(0, 0%, 100%)" },
  },
  typography: {
    fontFamily: "Space Mono",
    fontWeightRegular: 700,
    fontSize: 24,
    body1: {
      fontSize: 24,
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CalculatorPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
