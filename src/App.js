import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar"
import Products from './Components/Products/Products';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
     <Products/>

    </div>
  );
}

export default App;
