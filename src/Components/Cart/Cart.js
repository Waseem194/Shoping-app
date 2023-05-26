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
  const incremenetCount = (id) => {
    const cartUpdate = cart.map((cartItem) => {
      console.log(cartItem);
      if (cartItem.id === id) {
        return {
          ...cartItem,
          count: cartItem.count + 1,
        };
      }

      return cartItem;
    });
    setCart(cartUpdate);
    console.log(cartUpdate);
  };
  const decrementCount = (id) => {
    const newCart = cart
      .map((cartItem) => {
        if (cartItem.id === id) {
          const count = cartItem.count - 1;
          
          if (count <= 0) {
            return false;
          }
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
      <div className=" me-2">
        {cart.map(function (cart) {
          return (
            <>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img className="productImg" src={cart.image} />
                    </td>
                  </tr>
                  <th>
                    <td>Title:{cart.title}</td>
                  </th>
                  <tr>
                    <td>Price:{cart.price}</td>
                  </tr>
                  Rs:<span>{cart.price}</span> x
                  <span>
                    {cart.count} = Total: <span>{(cart.price * cart.count).toFixed(2)}</span>
                  </span>
                  <tr>
                    {" "}
                    <Button
                      variant="success"
                      className="me-2"
                      onClick={()=>incremenetCount(cart.id,
                        cart.image,
                        cart.title,
                        cart.price)}
                    >
                      <FontAwesomeIcon icon={faSquarePlus} />
                    </Button>{" "}
                    <Button variant="primary" onClick={()=>decrementCount(cart.id,
                        cart.image,
                        cart.title,
                        cart.price)}>
                      <FontAwesomeIcon icon={faSquareMinus} />
                    </Button>
                  </tr>
                </tbody>
                <hr />
              </table>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
