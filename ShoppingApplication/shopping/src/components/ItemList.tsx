import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { items } from "../constatnts";

const ItemBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ItemList: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  return (
    <Box>
      {items.map((item) => (
        <ItemBox key={item}>
          <Typography>{item}</Typography>
          <Button variant="contained" onClick={() => cartContext.addItem(item)}>
            Add
          </Button>
        </ItemBox>
      ))}
    </Box>
  );
};

export default ItemList;
