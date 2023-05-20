import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-black bg-dark border-0">
        <img
          src="background.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container"></div>

          <h5 className="card-title display-3 fw-bolder mb-0  ">
            NEW SEASON ARRIVALS
          </h5>
          <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
        </div>
      </div>
    </div>
  );
};

export default Home;