import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.scss';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <h1>Logo</h1>
        </div>
        <div className="center" onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
          <Link to="">About Us</Link>
          <Link to="">Contacts</Link>
          <Link to="">Booking</Link>
          <Link to="">Blogs</Link>
          <Link to="">Events</Link>
          <Link to="">Help</Link>
         
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
