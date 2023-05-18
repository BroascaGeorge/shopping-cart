import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-box">
        <span className="my-shop">My shopping</span>
        <div className="cart">
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
