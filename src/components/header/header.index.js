import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ cartData }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Khareed LO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <Link className="dropdown-item" to="VegetableShop">
                  Shop
                </Link>
                <Link className="dropdown-item" to="mycart">
                  Cart
                </Link>
                <Link className="dropdown-item" to="checkout">
                  Checkout
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="signup" className="nav-link">
                SignUP
              </Link>
            </li>
            <li className="nav-item cta cta-colored">
              <Link to="mycart" className="nav-link">
                <span className="icon-shopping_cart" />[{cartData.length}]
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  cartData: state.cart.cartData || [],
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
