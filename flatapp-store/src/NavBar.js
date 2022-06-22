import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

function NavBar() {
  return (
    <nav>
      <img src="logo" />
      <h1>FlatApp</h1>
      <Link exact to="/">Store</Link>
      <Link to="/about">About</Link>
      <Link to="/seller">Seller</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default NavBar
