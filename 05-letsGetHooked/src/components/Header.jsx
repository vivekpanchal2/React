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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
