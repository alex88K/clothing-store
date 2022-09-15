import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setCartItems } from "../../store/cart/cart.action";
import {
  clearCartItem,
  addCartItem,
  removeCartItem,
  updateCartItemsReducer,
} from "../../store/cart/cart.utils";

import { CheckoutItemContainer } from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () => {
    const newCartItems = clearCartItem(cartItems, item);
    dispatch(setCartItems(updateCartItemsReducer(newCartItems)));
  };

  const addItemHandler = () => {
    addItemToCart(item);
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    dispatch(setCartItems(updateCartItemsReducer(newCartItems)));
  };

  const removeItemHandler = () => {
    const newCartItems = removeCartItem(cartItems, item);
    dispatch(setCartItems(updateCartItemsReducer(newCartItems)));
  };

  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow " onClick={removeItemHandler}>
          &#10094;
        </span>
        {quantity}
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
