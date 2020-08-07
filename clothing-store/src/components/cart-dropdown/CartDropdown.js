import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";

import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((ci) => <CartItem key={ci.id} item={ci} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>GO TO CHECKOUT</CustomButton>
  </div>
);

const msp = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(msp, null)(CartDropdown));
