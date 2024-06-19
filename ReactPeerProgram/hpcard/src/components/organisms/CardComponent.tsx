import React from "react";
import { Card, CardContent, styled } from "@mui/material";
import Header from "../molecules/Header";
import Content from "../molecules/Content";
import Footer from "../molecules/Footer";

const StyledCard = styled(Card)(({ theme }) => ({
  height: 281,
  width: 350,
  borderRadius: "12px",
  margin: theme.spacing(2),
  padding: theme.spacing(2),
}));

const CardComponent = () => {
  return (
    <StyledCard>
      <CardContent>
        <Header />
        <Content />
        <Footer />
      </CardContent>
    </StyledCard>
  );
};

export default CardComponent;
