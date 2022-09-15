export const updateCartItemsReducer = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  const newCartTotal = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

  return {
    cartItems: newCartItems,
    cartCount: newCartCount,
    cartTotal: newCartTotal,
  };
};

export const addCartItem = (cartItems, productToAdd) => {
  for (let item of cartItems) {
    if (item.id === productToAdd.id) {
      item.quantity += 1;
      return [...cartItems];
    }
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
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
