import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <h2 className="nav-title">Anthony's Blog</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rationale">Rationale</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
