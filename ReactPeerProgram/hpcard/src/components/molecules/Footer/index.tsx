import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const icons = [
  { src: "./assets/bike.png", alt: "Bike", size: "20px" },
  { src: "./assets/bus.png", alt: "Bus", size: "20px" },
  { src: "./assets/car.png", alt: "Car", size: "20px" },
  { src: "./assets/train.png", alt: "Train", size: "20px" },
];

const Footer = () => {
  return (
    <Box>
      <Typography variant="caption">Commute routes available:</Typography>
      <IconsContainer>
        {icons.map((icon, index) => (
          <Icon key={index} src={icon.src} alt={icon.alt} size={icon.size} />
        ))}
        <Typography variant="caption">1hr 36 mins ago</Typography>
      </IconsContainer>
    </Box>
  );
};

export default Footer;
