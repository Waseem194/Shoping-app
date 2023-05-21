import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

const Cart = ({ cart }) => {
  let total = 0;
  return (
    <Fragment>
        <Navbar cart={cart} />
        <div>
      <table>
        <thead>
          {cart.map(function (product) {
            total += product.price;

            return (
              <tr>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </thead>
        <tbody>
          <tr>
            <td>Total Bill</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </Fragment>
    
  );
};

export default Cart;
