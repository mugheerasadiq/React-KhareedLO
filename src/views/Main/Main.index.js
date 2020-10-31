import React from "react";
import Footer from "../../components/footer/footer.index";
import Header from "../../components/header/header.index";
import About from "../About/About.index";
import Contact from "../Contact/Contact.index";
import Home from "../Home/Home.index";

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default Main;
