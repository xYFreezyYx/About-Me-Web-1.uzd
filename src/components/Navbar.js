import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <nav>
    <Link to="/">About</Link>
    <Link to="/hobbies">Hobbies</Link>
    <Link to="/printing">3D Printing</Link>
  </nav>
);

export default Navbar;
