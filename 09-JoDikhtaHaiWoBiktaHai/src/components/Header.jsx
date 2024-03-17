import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const Logo = () => {
  return (
    <a href="/" draggable="false" className="truncate h-20">
      <img
        className="h-full w-auto p-2"
        alt="logo"
        src="https://ik.imagekit.io/69bi4nw394/foodex-vector-logo-removebg-preview.png?updatedAt=1710578320596"
      ></img>
    </a>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-md">
      <Logo />
      <div className="sm:visible lg:visible">
        <ul className="flex">
          <li className="px-3 group">
            <Link to="/">Home</Link>
            <div className="h-1 w-full bg-slate-500 opacity-0 group-hover:opacity-100"></div>
          </li>
          <li className="px-3 group">
            <Link to="/about">About</Link>
            <div className="h-1 w-full bg-slate-500 opacity-0 group-hover:opacity-100"></div>
          </li>
          <li className="px-3 group">
            <Link to="/contact">Contact</Link>
            <div className="h-1 w-full bg-slate-500 opacity-0 group-hover:opacity-100"></div>
          </li>
          <li className="px-3 group">
            <Link to="/xmart">XMart</Link>
            <div className="h-1 w-full bg-slate-500 opacity-0 group-hover:opacity-100"></div>
          </li>

          <li className="px-3 group">
            Cart
            <div className="h-1 w-full bg-slate-500 opacity-0 group-hover:opacity-100"></div>
          </li>
          <li className="px-3 group">{useIsOnline() ? "☑️" : "❌"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
