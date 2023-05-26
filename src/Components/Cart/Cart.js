import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  // find, forEach, map
  // find karni hoti hai, wo cheez mil jaye ge ya null aye ga
  // forEach, har item par aik callback function run karta hai, no need for return
  // map, har item par aik callback function run karta hai, but return is must

  let total = 0;

  cart.forEach((product) => {
    total += product.count * product.price;
  });
  const incrementCount = (id) => {
    const cartUpdate = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          count: cartItem.count + 1,
        };
      }
      return cartItem;
    });
    setCart(cartUpdate);
  };
  const decrementCount = (id) => {
    const newCart = cart
      .map((cartItem) => {
        if (cartItem.id === id) {
          const count = cartItem.count - 1;
          if (count <= 0) {
            return false;
          }
          return {
            ...cartItem,
            count,
          };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem);
    setCart(newCart);
  };

  return (
    <>
      <Navbar cart={cart} />
      <table>
        <tbody>
          <tr>
            <td>Total Bill:</td>
            <td>{parseFloat(total).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="me-2">
        {cart.map(function (cart) {
          return (
            <Fragment key={cart.id}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="productImg"
                        src={cart.image}
                        alt="product"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Title:{cart.title}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Price:{cart.price}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Rs:<span>{cart.price}</span> x{" "}
                      <span>
                        {cart.count} = Total:{" "}
                        <span>{(cart.price * cart.count).toFixed(2)}</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Button
                        variant="success"
                        className="me-2"
                        onClick={() => incrementCount(cart.id)}
                      >
                        <FontAwesomeIcon icon={faSquarePlus} />
                      </Button>{" "}
                      <Button
                        variant="primary"
                        onClick={() => decrementCount(cart.id)}
                      >
                        <FontAwesomeIcon icon={faSquareMinus} />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
