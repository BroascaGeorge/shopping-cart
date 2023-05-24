import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-box">
        <span className="my-shop">My shop</span>
        <div className="cart">
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
