import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const Logo = () => {
  return (
    <a href="/" draggable="false">
      <img
        className="logo"
        alt="logo"
        src="https://getvectorlogo.com/wp-content/uploads/2020/02/foodex-vector-logo.png"
      ></img>
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/xmart">X-Mart</Link>
          </li>
          <li>Cart</li>
          <li>{useIsOnline() ? "☑️" : "❌"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
