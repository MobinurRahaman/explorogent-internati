"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0A56F1",
    },
    secondary: {
      main: "#E68F50",
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
});

export default theme;
