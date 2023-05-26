import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Products = ({ cart, addToCart }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <span className="placeholder"></span>
        </div>
        <div className="col-md-3">
          <span className="placeholder "></span>
        </div>
        <div className="col-md-3">
          <span className="placeholder"></span>
        </div>
        <div className="col-md-3">
          <span className="placeholder"></span>
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const onAddToCart = (id, image, title, price) => {
    let updatedCart = cart;
    const existingProduct = cart.find((product) => product.id === id);
    if (existingProduct) {
      updatedCart = cart.map((product) => {
        if (product.id === existingProduct.id) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });
    } else {
      const data = {
        id,
        image,
        title,
        price,
        count: 1,
      };
      updatedCart = [...cart, data];
    }

    addToCart(updatedCart);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Men's Clothing ")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Women's Clothing ")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Jewelery ")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Electronics ")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-3" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">Rs:{product.price}</p>
                  <Button variant="light" className="p2-4">
                    Buy Now
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() =>
                      onAddToCart(
                        product.id,
                        product.image,
                        product.title,
                        product.price
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Latest Products{" "}
            </h1>
            <hr />
            <div className="row justify-content-center">
              {loading ? <Loading /> : <ShowProducts />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
