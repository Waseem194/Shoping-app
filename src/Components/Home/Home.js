import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const Home = ({ cart, setCart }) => {
  return (
    <Fragment>
      <Navbar cart={cart} />
      <div className="hero">
        <div className="card text-black  bg-dark border-0">
          <img
            src="background.jpg"
            className="card-img"
            alt="Background"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center text-start">
            <div className="container"></div>

            <h5 className="card-title display-3 fw-bolder mb-0  ">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2 ">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products addToCart={setCart} cart={cart} />
    </Fragment>
  );
};

export default Home;
