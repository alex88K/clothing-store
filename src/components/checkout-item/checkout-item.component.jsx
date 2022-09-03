import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);
  const { id, name, imageUrl, price, quantity } = item;

  const clearItemHandler = () => clearItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemToCart(item);

  return (
    <div className="checkout-item-container">
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
    </div>
  );
};

export default CheckoutItem;
