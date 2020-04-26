import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink exact activeClassName="_active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="_active" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="_active" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export { Nav };
