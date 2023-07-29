import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';
import { FcIdea } from "react-icons/fc";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">DEV FULLSTACK</h2>
        <h3 className="tagline">Passionate about Technology - Fullstack Developer <FcIdea/></h3>
        <p className="paragraph">Passionate about learning new technologies and focused on fullstack development, but with a special passion for the backend. I am constantly looking to improve my skills to create robust and efficient solutions in the digital world.</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://google.com" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="prantosh" className="hero-image" />
    </div>
    <div className="social-icons">
        <a href="https://github.com/PrantoshB" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/prantosh" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://wellfound.com/u/prantosh-biswas" target="_blank" rel="noreferrer">
          <i className="fab fa-angellist" />
        </a>
        <a href="https://www.twitter.com/prantalks" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
  </div>
);

export default Hero;
