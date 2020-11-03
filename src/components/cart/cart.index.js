import React from "react";

const Cart = ({ item }) => {
  const itemlist = item.map((item) => {
    return (
      <tr className="text-center" key={item.key}>
        <td className="product-remove">
          <a href="#">
            <span className="ion-ios-close" />
          </a>
        </td>
        <td className="image-prod">
          <div
            className="img"
            style={{
              backgroundImage: "url(" + item.image + ")",
            }}
          />
        </td>
        <td className="product-name">
          <h3>{item.name}</h3>
          <p>Far far away, behind the word mountains, far from the countries</p>
        </td>
        <td className="price">${item.orignalPrice}</td>
        <td className="quantity">{item.quantity}</td>
        <td className="total">{item.orignalPrice * item.quantity}</td>
      </tr>
    );
  });
  return (
    <div className="row">
      <div className="col-md-12 ">
        <div className="cart-list">
          <table className="table">
            <thead className="thead-primary">
              <tr className="text-center">
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>{itemlist}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
