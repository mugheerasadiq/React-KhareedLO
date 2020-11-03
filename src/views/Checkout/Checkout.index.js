import React from "react";

const Checkout = () => {
  return (
    <section className="ftco-section ftco-cart">
      <div className="container">
        <div className="row align-item-start">
          <div className="col-lg-6 cart-wrap ">
            <div className="cart-detail cart-total p-3 p-md-4">
              <h3 className="billing-heading mb-4">Cart Total</h3>
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
          </div>

          <div className="col-lg-6 cart-wrap ">
            <div className="cart-detail p-3 p-md-4">
              <h3 className="billing-heading mb-4">Payment Method</h3>
              <div className="form-group">
                <div className="col-md-12">
                  <div className="radio">
                    <label>
                      <input type="radio" name="optradio" className="mr-2" />{" "}
                      Online Payment
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12">
                  <div className="radio">
                    <label>
                      <input type="radio" name="optradio" className="mr-2" />{" "}
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>
              <p className="col-6">
                <a href="#" className="btn btn-primary px-2">
                  Proceed
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
