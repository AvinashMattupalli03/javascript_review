import React, { useContext, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { CartContext } from "./CartContext";
import styled from "styled-components";

const CartBox = styled(Box)`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  const itemCount = useMemo(
    () => cartContext?.items.length || 0,
    [cartContext?.items]
  );

  if (!cartContext) return null;

  return (
    <Box>
      <CartBox>
        <Typography variant="h6">Items in Cart:</Typography>
        {cartContext.items.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}
      </CartBox>
      <Typography variant="h6">Total Items: {itemCount}</Typography>
    </Box>
  );
};

export default Cart;
