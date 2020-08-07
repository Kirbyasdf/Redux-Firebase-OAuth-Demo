import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mdp = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const msp = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(msp, mdp)(CartIcon);
