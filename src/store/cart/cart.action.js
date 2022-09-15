import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

const addCartItem = (cartItems, productToAdd) => {
  for (let item of cartItems) {
    if (item.id === productToAdd.id) {
      item.quantity += 1;
      return [...cartItems];
    }
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  for (let item of cartItems) {
    if (item.id === cartItemToRemove.id) {
      if (item.quantity === 1) {
        return cartItems.filter((item) => item.id !== cartItemToRemove.id);
      }

      item.quantity -= 1;
      return [...cartItems];
    }
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
