import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to='/tickets'
        className={({ isActive }) =>
          (isActive ? 'navbar-active-link' : undefined) + ' navbar-link'
        }
      >
        TICKETS
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
