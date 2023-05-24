import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar size={cart.length} />
      <Amazon />
      <Cart />
    </>
  );
}

export default App;
