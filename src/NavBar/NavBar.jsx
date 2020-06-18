import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
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
            <NavLink exact to="/cart" activeClassName={style.curent}>
              <Badge
                color="secondary"
                // badgeContent={props.cartNumber}
                showZero
              >
                <ShoppingCart />
              </Badge>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
