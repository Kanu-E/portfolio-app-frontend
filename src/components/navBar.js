import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const link = {
  padding: '.4% ',
  margin: '3px 12px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <Navbar bg="dark">  
            <NavLink to="/" style={link}>Home</NavLink>
            <NavLink to="/portfolios" exact style={link}>Portfolios</NavLink>
            <NavLink to="/portfolios/new" exact style={link}>Create Portfolio</NavLink>  
            <NavLink to="/portfolios/search" exact style={link}>Search</NavLink>              
    </Navbar>
  )
};

export default NavBar;