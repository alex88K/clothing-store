import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { setCartItems } from "../../store/cart/cart.action";
import {
  addCartItem,
  updateCartItemsReducer,
} from "../../store/cart/cart.utils";

import { ProductCardContainer } from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    dispatch(setCartItems(updateCartItemsReducer(newCartItems)));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => addItemToCart(product)}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
