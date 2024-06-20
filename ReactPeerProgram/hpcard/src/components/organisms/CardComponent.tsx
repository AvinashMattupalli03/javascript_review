import React from "react";
import { Card, CardContent, styled } from "@mui/material";
import Header from "../molecules/Header";
import Content from "../molecules/Content";
import Footer from "../molecules/Footer";

const StyledCard = styled(Card)(({ theme }) => ({
  height: 271,
  width: 320,
  borderRadius: "12px",
  margin: theme.spacing(2),
  padding: "16px 17.5px",
}));

const StyledCardContent = styled(CardContent)({
  padding: "0px",
});

const CardComponent = () => {
  return (
    <StyledCard>
      <StyledCardContent>
        <Header />
        <Content />
        <Footer />
      </StyledCardContent>
    </StyledCard>
  );
};

export default CardComponent;
