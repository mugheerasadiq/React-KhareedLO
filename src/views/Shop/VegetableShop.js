import React from "react";
import { Vegetables } from "../../shared/Vegetables";
import Product from "../../components/product/product.index";

const VegetableShop = () => {
  return (
    <div>
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: "url(assests/images/bg_1.jpg)" }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Products</span>
              </p>
              <h1 className="mb-0 bread">Products</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
              <ul className="product-category">
                <li>
                  <a href="#" className="active">
                    Vegetables
                  </a>
                </li>
                <li>
                  <a href="#">Fruits</a>
                </li>
                <li>
                  <a href="#">Juice</a>
                </li>
                <li>
                  <a href="#">Dried</a>
                </li>
              </ul>
            </div>
          </div>

          <Product ProductData={Vegetables} />

          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VegetableShop;
