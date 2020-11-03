import React from "react";
import Cart from "../../components/cart/cart.index";
import { CartData } from "../../shared/Cart";

const MyCart = () => {
  return (
    <div>
      <section className="ftco-section ftco-cart">
        <div className="container">
          <Cart item={CartData} />
          <div className="row">
            <div className="col-12 mt-5 cart-wrap">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>$20.60</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>$3.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>$17.60</span>
                </p>
              </div>
              <p>
                <a href="checkout.html" className="btn btn-primary py-3 px-4">
                  Proceed to Checkout
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
        <div className="container py-4">
          <div className="row d-flex justify-content-center py-5">
            <div className="col-md-6">
              <h2 style={{ fontSize: "22px" }} className="mb-0">
                Subcribe to our Newsletter
              </h2>
              <span>
                Get e-mail updates about our latest shops and special offers
              </span>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                  <input
                    type="submit"
                    defaultValue="Subscribe"
                    className="submit px-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyCart;
