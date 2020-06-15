import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div>
    <NavLink to='/notes'>Flatnote</NavLink>
    <NavLink to='/notes/new'>New Note</NavLink>
    <NavLink to='/login'>Sign Out</NavLink>
  </div>
);

export default NavBar;
