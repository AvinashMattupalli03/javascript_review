import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import TypographyElement from "../atoms/TypographyElement";
import IconElement from "../atoms/IconElement";

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Footer = () => {
  return (
    <Box>
      <TypographyElement
        variant="caption"
        content="Commute routes available:"
      />
      <IconsContainer>
        <IconElement
          src="./icons/bike.png"
          alt="Bike"
          height="20px"
          width="20px"
        />
        <IconElement
          src="./icons/bus.png"
          alt="Bus"
          height="20px"
          width="20px"
        />
        <IconElement
          src="./icons/car.png"
          alt="Car"
          height="20px"
          width="20px"
        />
        <IconElement
          src="./icons/train.png"
          alt="Train"
          height="20px"
          width="20px"
        />
        <TypographyElement variant="caption" content="1hr 36 mins ago" />
      </IconsContainer>
    </Box>
  );
};

export default Footer;
