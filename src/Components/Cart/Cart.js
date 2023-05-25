import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus,faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
const Cart = ({ cart,count }) => {
  console.log(cart);
  let total = 0;
  return (
    <>
      <Navbar cart={cart} />
const incrementCount=()={
set 

}
    
   
      {cart.map(function (cart) {
        total += cart.price;
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
                <p className="card-text lead fw-bold">Rs:{cart.price}</p>
                   <Button variant="success">
                   
                <FontAwesomeIcon icon={faSquarePlus} />
                   </Button>{' '}
      
    <Button variant="primary">
    
                <FontAwesomeIcon icon={faSquareMinus} />
    </Button>{' '}

                <div />
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <table>
        <tr>
          <td>Total Bill:</td>
          <td>{total}</td>
        </tr>
      </table>
    </>
  );
};

export default Cart;
