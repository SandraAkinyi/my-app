import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  const Menus = ["Doctors", "Nurses", "LabTech", "Patient"];
  const [open, setOpen] = useState(false);

  const buttonRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [buttonRef]);

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/">Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/aboutus">About Us</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/contacts">Contacts</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/appointment">Appointment</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/blogs">Blogs</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/events">Events</Link>
        </li>
        <li onClick={() => setMenuOpen(true)}>
          <Link ref={buttonRef} className="customButton" onClick={() => setOpen(!open)}>Log In</Link>
          {open && (
            <div className='menuContainer'>
              <ul>
                {Menus.map((menu) => (
                  <li key={menu} onClick={() => setOpen(false)}>
                    <Link to={`/${menu.toLowerCase()}`}>{menu}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
