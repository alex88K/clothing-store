import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </CheckoutContainer>
  );
};

export default Checkout;
