import { useState } from "react";
import { Link } from "react-router-dom";

const BtnLogIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleBtn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <li className="logInBtn">
      {
        isLoggedIn ?
          <button onClick={toggleBtn}>Log out</button> :
          <button onClick={toggleBtn}>Log In</button>
      }
    </li>
  );
}

const NavItems = () => {
  return (
    <div className="nav-container">
      <ul className="nav-items">
        <li className="home"><Link to={"/"}>Home</Link></li>
        <li className="about"><Link to={"./about"}>About Us</Link></li>
        <li className="contact-us"><Link to={"./contact"}>Contact Us</Link></li>
        <BtnLogIn />
        <li className="cart">Cart</li>
      </ul>
    </div>
  )
}

export default NavItems;