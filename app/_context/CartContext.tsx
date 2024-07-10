"use client";

import { createContext, ReactNode, useContext, useReducer } from "react";
import { productItem } from "../_lib/data";

type CartItem = {
  product: productItem;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  isOrderConfirmed: boolean;
};

type Action =
  | { type: "ADD_TO_CART"; item: productItem }
  | { type: "REMOVE_FROM_CART"; item: productItem }
  | { type: "CLEAR_CART" }
  | { type: "INCREASE_QUANTITY"; item: productItem }
  | { type: "DECREASE_QUANTITY"; item: productItem }
  | { type: "PLACE_ORDER" };

const initialState: CartState = {
  cart: [],
  isOrderConfirmed: false,
};

function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingIndex = state.cart.findIndex(
        (cartItem) => cartItem.product.name === action.item.name,
      );

      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { product: action.item, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product !== action.item),
      };

    case "INCREASE_QUANTITY":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.product.name === action.item.name,
      );

      if (index !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[index].quantity++;
        return { ...state, cart: updatedCart };
      } else {
        return state;
      }

    case "DECREASE_QUANTITY":
      const decreaseIndex = state.cart.findIndex(
        (cartItem) => cartItem.product.name === action.item.name,
      );

      if (decreaseIndex !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[decreaseIndex].quantity > 1) {
          updatedCart[decreaseIndex].quantity -= 1;
        } else {
          updatedCart.splice(decreaseIndex, 1);
        }
        return { ...state, cart: updatedCart };
      } else {
        return state;
      }
    case "PLACE_ORDER":
      return {
        ...state,
        isOrderConfirmed: true,
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

const CartContext = createContext<{
  cart: CartItem[];
  isOrderConfirmed: boolean;
  addToCart: (item: productItem) => void;
  removeFromCart: (item: productItem) => void;
  clearCart: () => void;
  increaseQuantity: (item: productItem) => void;
  decreaseQuantity: (item: productItem) => void;
  placeOrder: () => void;
}>({
  cart: [],
  isOrderConfirmed: false,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  placeOrder: () => {},
});

function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(item: productItem) {
    dispatch({ type: "ADD_TO_CART", item });
  }

  function removeFromCart(item: productItem) {
    dispatch({ type: "REMOVE_FROM_CART", item });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  function increaseQuantity(item: productItem) {
    dispatch({ type: "INCREASE_QUANTITY", item });
  }

  function decreaseQuantity(item: productItem) {
    dispatch({ type: "DECREASE_QUANTITY", item });
  }
  function placeOrder() {
    dispatch({ type: "PLACE_ORDER" });
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        isOrderConfirmed: state.isOrderConfirmed,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
