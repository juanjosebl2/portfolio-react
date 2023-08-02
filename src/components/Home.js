import React from 'react';
import './Home.css';
import { Link } from 'react-scroll';
import ima from '../assets/imu.png';
import { FcIdea } from "react-icons/fc";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">DEV FULLSTACK</h2>
        <h3 className="tagline">Passionate about Technology - Fullstack Developer <FcIdea /></h3>
        <p className="paragraph">Passionate about learning new technologies and focused on fullstack development, but with a special passion for the backend. I am constantly looking to improve my skills to create robust and efficient solutions in the digital world.</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://drive.google.com/file/d/1SRs68hq0a2XkNNynU-gg8oJAKICVtkxF/view?usp=drive_link" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link to="/contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={ima} alt="img-home" className="hero-image" />
    </div>
  </div>
);

export default Hero;
