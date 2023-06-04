import { useEffect, useState } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice()
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart?.map((item) => {
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={cart.img} alt="cart.img"></img>
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, "+")}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, "-")}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>;
      })}
      <div className="total">
        <span>Total price of your cart is - </span>
        <span>${price}</span>
      </div>
    </article>
  );
};

export default Cart;
