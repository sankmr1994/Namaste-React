import { useContext, useState } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="nav-link">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="nav-link">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart - {cartItems.length} Items
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li className="nav-link">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
