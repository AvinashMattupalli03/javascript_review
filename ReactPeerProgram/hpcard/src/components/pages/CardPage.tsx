import React from "react";
import CardTemplate from "../templates/CardTemplate";
import theme from "../../Theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

const CardPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CardTemplate />
    </ThemeProvider>
  );
};

export default CardPage;
