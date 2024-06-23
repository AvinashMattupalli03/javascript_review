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
    text: {
      primary: "#373C38",
      secondary: "#656E66",
      disabled: "#B0BEC5",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h6: {
      color: "#373C38",
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1rem",
      color: "#FF725E",
      fontWeight: 500,
    },
    subtitle2: {
      color: "#656E66",
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    caption: {
      color: "#373C38",
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 600,
    },
  },
});

export default theme;
