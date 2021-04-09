import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {

  const [show, setShow] = useState(0);

  function dropdown() {
    (show) ? setShow(0) : setShow(1);
    console.log(show);
  }

  return (
    <nav>
      <h2 className="nav-title">Anthony's Blog</h2>
      <div className='arrow-div' onClick={dropdown}><p className="arrow" show={show}></p></div>
      <ul>
        <li show={show}>
          <Link to="/">Home</Link>
        </li>
        <li show={show}>
          <Link to="/rationale">Rationale</Link>
        </li>
        <li show={show}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
