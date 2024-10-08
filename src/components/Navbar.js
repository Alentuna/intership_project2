import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/galary">Galary</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li class="dropdown">

        <Link to="/about">About</Link>

                    <div class="dropdown-content">
                <a href="#">Port folio</a>
                <a href="#">personal info</a>
                <a href="#">education</a>
                <a href="#">carrer</a>
    </div>
                </li>

        /
        /
        /<li><button class="login-button">Login</button></li>
    </ul>
    </nav>
  );
}

export default NavBar;
