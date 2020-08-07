import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.seclectors";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((ci) => (
        <CartItem key={ci.id} item={ci} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const msp = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(msp, null)(CartDropdown);
