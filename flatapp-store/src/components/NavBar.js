import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import flatapplogo from "../flatapplogo.png";
import { BsCart3 } from "react-icons/bs";

function NavBar() {
  return (
    <nav>
      <Link exact to="/">
        <img src={flatapplogo} alt="flatapp logo" className="nav--icon" />
        <h1>FlatApp</h1>
      </Link>

      <Link exact to="/">
        Store
      </Link>
      <Link to="/about">About</Link>
      <Link to="/seller">Seller</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/cart">
        <BsCart3 />
      </Link>
    </nav>
  );
}

export default NavBar;
