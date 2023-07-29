import './NavBar.css';
import { Link } from 'react-scroll';
import { FcGraduationCap } from "react-icons/fc";
import React, { useEffect, useState } from 'react';

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
            <Link className="name-logo" to="home">
              JuanWEB
            </Link>
          </h1>
        </div>
        <ul className="menu">
          <li>
            <Link to="home">
              HOME
            </Link>
          </li>
          <li>
            <Link to="about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="projects">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
