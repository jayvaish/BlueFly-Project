import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top-div">
        <div className="not-use"></div>
        <div className="web-name">
          <Link className="img-logo" to="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243"
              width={"200px"}
              alt="logo"
            />
          </Link>
          <div className="cart_login">
            <Link className="nav" to="/">
              <div className="search">
                <span
                  className="iconify"
                  data-icon="fe:search"
                  data-width="20"
                  data-height="20"
                ></span>
                <p>Search</p>
              </div>
            </Link>
            <Link className="nav" to="/signin">
              👤 Login
            </Link>
            <Link className="nav" to="/cart">
              🛒 Cart
            </Link>
          </div>
        </div>
{/* ........................................................................... */}
      </div>
      <div className="bottom-div">
      <Link className="nav" to="/product">
          WOMEN
        </Link>
        <Link className="nav" to="/product">
          MEN
        </Link>
        <Link className="nav" to="/">
          SHOES
        </Link>
        <Link className="nav" to="/">
          HANDBAGS & ACCESSORIES
        </Link>
        <Link className="nav" to="/">
          DESIGNERS
        </Link>
        <Link className="nav" to="/">
          SUNGLASSES
        </Link>
        <Link className="nav" to="/">
          JEWELRY & WATCHES
        </Link>
        <Link className="nav" to="/">
          UNDER $50
        </Link>
        <Link className="nav" to="/">
          BEAUTY
        </Link>
        <Link className="clear" to="/">CLEARANCE</Link>
      </div>
    </div>
  );
};
