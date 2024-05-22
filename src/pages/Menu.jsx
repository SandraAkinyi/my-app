import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  const Menus = ["Admin", "Staff", "Others"];
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
          <Link className="customButton" to="/">About Us</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/">Contacts</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/">Bookings</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/">Blogs</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/">Events</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link className="customButton" to="/">Help</Link>
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
