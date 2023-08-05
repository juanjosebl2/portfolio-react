import './NavBar.css';
import { FcGraduationCap } from "react-icons/fc";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScroll(scrollPercentage >= 2);
    };

    // Use passive: true for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${open ? 'nav-open' : ''} ${scroll ? 'scrolled' : ''}`}>
        <div className="tophead">
          <h1>
            <FcGraduationCap className="icon" />
            <NavLink className="name-logo" to='/home'>
              JuanWEB
            </NavLink>
          </h1>
          <div className={`menu-btn ${open ? 'opened-btn' : ''}`} onClick={handleMenu} />
        </div>
        <ul className={`menu ${open ? 'open' : ''}`}>
          <li>
            <NavLink to='/home' onClick={handleMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleMenu}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={handleMenu}>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleMenu}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
