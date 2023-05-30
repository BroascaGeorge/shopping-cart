import { useState } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  return (
    <article>
      {cart?.map((item) => {
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={cart.img} alt="cart.img"></img>
            <p>{item.title}</p>
          </div>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button>Remove</button>
          </div>
        </div>;
      })}
      <div>
        <span>Total price of your cart is - </span>
        <span>${price}</span>
      </div>
    </article>
  );
};

export default Cart;
