import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to='/home'
        className={({ isActive }) =>
          (isActive ? 'navbar-active-link' : undefined) + ' navbar-link'
        }
      >
        TICKET
      </NavLink>
      <NavLink
        to='/employee'
        className={({ isActive }) =>
          (isActive ? 'navbar-active-link' : undefined) + ' navbar-link'
        }
      >
        EMPLOYEE
      </NavLink>
    </nav>
  );
};

export default Navbar;
