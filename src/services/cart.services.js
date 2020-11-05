import React from "react";
import { setCartData } from "../actions/cart.actions";
import { Vegetables } from "../shared/Vegetables";

export const addToCart = (items) => {
  return (dispatch) => dispatch(setCartData(items));
};

export const removeFromCart = (items) => {
  return (dispatch) => dispatch(setCartData(items));
};
