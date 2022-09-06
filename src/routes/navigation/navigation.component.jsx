import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { userContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const { isCartOpen } = useContext(CartContext);
  const location = useLocation();

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN-OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      {location.pathname !== "/" && <Breadcrumbs />}
      <Outlet />
    </>
  );
};

export default Navigation;
