"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "./products";

export type CartItem = {
  product: Product;
  quantity: number;
  liters: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; product: Product; quantity: number; liters: number }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number; liters: number }
  | { type: "CLEAR_CART" };

const CartContext = createContext<{
  items: CartItem[];
  addItem: (product: Product, quantity: number, liters: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number, liters: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === action.product.id
      );
      
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + action.quantity,
          liters: newItems[existingIndex].liters + action.liters,
        };
        return { items: newItems };
      }
      
      return {
        items: [...state.items, { product: action.product, quantity: action.quantity, liters: action.liters }],
      };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.product.id !== action.productId),
      };
    case "UPDATE_QUANTITY":
      return {
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity, liters: action.liters }
            : item
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (product: Product, quantity: number, liters: number) => {
    dispatch({ type: "ADD_ITEM", product, quantity, liters });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  };

  const updateQuantity = (productId: string, quantity: number, liters: number) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      dispatch({ type: "UPDATE_QUANTITY", productId, quantity, liters });
    }
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => {
      const pricePerLiter = item.product.priceDh / parseFloat(item.product.volume);
      return total + pricePerLiter * item.liters;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}



