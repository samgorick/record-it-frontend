import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = props => (
  <Menu color='blue' inverted size='massive'>
    <Menu.Item header link>
      <NavLink to='/notes'>Flatnote</NavLink>
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item link>
        <NavLink to='/notes/new'>New Note</NavLink>
      </Menu.Item>
      <Menu.Item link>
        <NavLink to='/explore'>Explore</NavLink>
      </Menu.Item>
      <Menu.Item link>
        <NavLink to='/login' onClick={props.logoutUser}>
          Sign Out
        </NavLink>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBar;
