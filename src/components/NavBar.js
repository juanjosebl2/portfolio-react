import './NavBar.css';
import { FcGraduationCap } from "react-icons/fc";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const [scroll, setScroll] = useState(false);

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
      <nav className={`${scroll ? 'scrolled' : ''}`}>
        <div className="tophead">
          <h1>
            <FcGraduationCap className="icon"/>
            <NavLink className="name-logo" to='/home'>
              JuanWEB
            </NavLink>
          </h1>
        </div>
        <ul className="menu">
          <li>
            <NavLink to='/home'>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects'>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
