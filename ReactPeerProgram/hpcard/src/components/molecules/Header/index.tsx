import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Icon from "../../atoms/Icon";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Header = () => {
  return (
    <HeaderContainer>
      <Icon src="./assets/hp.png" alt="HP Logo" size="63px" />
      <Icon src="./assets/more.png" alt="More Options" size="24px" />
    </HeaderContainer>
  );
};

export default Header;
