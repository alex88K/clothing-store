import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import { CheckoutItemContainer } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
