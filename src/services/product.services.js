import React from "react";
import { setProductData } from "../actions/product.action";
import { deleteRequest, getRequest, postRequest } from "./verb.services";
import { Vegetables } from "../shared/Vegetables";

export const getProducts = (resolve, reject) => {
  return (dispatch) => {
    dispatch(setProductData(Vegetables));
  };
};
