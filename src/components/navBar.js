import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    // width: '100px',
    // padding: '20px ',
    // margin: '0 60px 60px',
    // background: 'blue',
    // textDecoration: 'none',
    // color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
     <NavLink to="/" style={link}>Home</NavLink>
     <NavLink to="/portfolios" exact style={link}>Portfolios</NavLink>
    </div>
  );
};

export default NavBar;