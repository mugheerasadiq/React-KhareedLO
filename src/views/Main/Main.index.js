import React from "react";
import MyCart from "../MyCart/MyCart.index";
import Footer from "../../components/footer/footer.index";
import Header from "../../components/header/header.index";
import ProductDetails from "../../components/product/productDetails";
import { Vegetables } from "../../shared/Vegetables";
import About from "../About/About.index";
import SignUp from "../Authentication/SignUp.index";
import Contact from "../Contact/Contact.index";
import Home from "../Home/Home.index";
import FruitShop from "../Shop/FruitShop";
import VegetableShop from "../Shop/VegetableShop";
import Checkout from "../Checkout/Checkout.index";
import PaymentForm from "../Checkout/OnlinePayment";
import Cart from "../../components/cart/cart.index";

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
