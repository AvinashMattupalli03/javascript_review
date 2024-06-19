import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import IconElement from "../atoms/IconElement";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Header = () => {
  return (
    <HeaderContainer>
      <IconElement
        src="./icons/hp.png"
        alt="HP Logo"
        height="63px"
        width="63px"
      />
      <IconElement
        src="./icons/more.png"
        alt="More Options"
        height="24px"
        width="24px"
      />
    </HeaderContainer>
  );
};

export default Header;
