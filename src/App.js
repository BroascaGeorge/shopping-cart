import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import "./styles/amazon.css";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <>
      <Navbar size={cart.length} />
      <Amazon handleClick={handleClick} />
      <Cart />
      {warning && (
        <div className="warning">Item is already added to your cart.</div>
      )}
    </>
  );
}

export default App;
