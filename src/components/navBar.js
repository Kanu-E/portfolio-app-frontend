import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const link = {
  padding: '2% ',
  margin: '12px 120px',
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
    </Navbar>
  )
};

export default NavBar;