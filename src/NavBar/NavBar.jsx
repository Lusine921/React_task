import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
class Nav extends Component {
  render() {
    return (
      <nav className={style.flex}>
        <h1>Logo</h1>
        <ul className="myMenu">
          <li>
            <NavLink exact to="/" activeClassName={style.curent}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName={style.curent}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/cart" activeClassName={style.curent}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
