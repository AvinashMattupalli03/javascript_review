import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    h6: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1rem",
      color: "#FF725E",
      fontWeight: 400,
    },
    subtitle2: {
      color: "#656E66",
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.9rem",
      fontWeight: 300,
    },
  },
});

export default theme;
