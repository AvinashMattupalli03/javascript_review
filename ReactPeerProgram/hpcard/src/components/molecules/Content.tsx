import React from "react";
import { Box } from "@mui/material";
import TypographyElement from "../atoms/TypographyElement";

const Content = () => {
  return (
    <Box my={2.5}>
      <TypographyElement variant="h6" content="User Experience Designer" />
      <TypographyElement variant="subtitle1" content="HP" />
      <TypographyElement
        variant="subtitle2"
        content="Hyderabad, Telangana, India"
      />
    </Box>
  );
};

export default Content;
