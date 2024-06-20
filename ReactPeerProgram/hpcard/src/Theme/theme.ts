import { createTheme } from "@mui/material";
import "@fontsource/montserrat";

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
    fontFamily: "Montserrat",
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
      fontWeight: 500,
    },
  },
});

export default theme;
