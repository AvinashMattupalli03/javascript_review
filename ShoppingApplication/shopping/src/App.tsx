import React from "react";
import { Container, Typography } from "@mui/material";
import { CartProvider } from "./components/CartContext";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Container>
        <Typography variant="h4" textAlign={"center"} gutterBottom>
          Shopping Cart
        </Typography>
        <ItemList />
        <Cart />
      </Container>
    </CartProvider>
  );
};

export default App;
