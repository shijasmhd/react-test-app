import { useState } from "react";

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
        <li className="home">Home</li>
        <li className="about">About Us</li>
        <li className="contact-us">Contact Us</li>
        <BtnLogIn />
        <li className="cart">Cart</li>
      </ul>
    </div>
  )
}

export default NavItems;