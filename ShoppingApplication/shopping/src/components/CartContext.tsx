import React, { createContext, useState, ReactNode, useCallback } from "react";

interface CartContextProps {
  items: string[];
  addItem: (item: string) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = useCallback((item: string) => {
    setItems((prevItems) => [...prevItems, item]);
  }, []);

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
