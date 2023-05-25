import { useState } from "react";
import Home from "./Components/Home/Home";

import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState();
  console.log(cart.title);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} setCount={setCount}/>} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/cart" element={<Cart cart={cart} count={count} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
