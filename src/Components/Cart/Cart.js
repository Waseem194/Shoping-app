import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
const Cart = ({ cart }) => {
  // find, forEach, map
  // find karni hoti hai, wo cheez mil jaye ge ya null aye ga
  // forEach, har item par aik callback function run karta hai, no need for return
  // map, har item par aik callback function run karta hai, but return is must
  console.log(cart);
  let total = 0;
  cart.forEach((product) => {
    total += product.count * product.price;
  });
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
      <div className="d-flex">
        {cart.map(function (cart) {
          return (
            <div className="col-md-3 mb-4 " key={cart.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={cart.image}
                  className="card-img-top"
                  alt={cart.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{cart.title}</h5>
                  <p className="card-text lead fw-bold">
                    Rs:<span>{cart.price}</span> x
                    <span>
                      {cart.count} = Total:{" "}
                      <span>{cart.price * cart.count}</span>
                    </span>
                  </p>
                  <Button variant="success" className="me-2">
                    <FontAwesomeIcon icon={faSquarePlus} />
                  </Button>
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faSquareMinus} />
                  </Button>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
