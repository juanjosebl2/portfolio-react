import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.google.com/">
            <ion-icon name="logo-facebook"></ion-icon>
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.google.com/">
            <ion-icon name="logo-twitter"></ion-icon>
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.google.com/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.google.com/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a></li>
      </ul>
      <ul className="menu_footer">
        <li className="menu__item"><a className="menu__link" href="https://www.google.com/">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="https://www.google.com/">About</a></li>
        <li className="menu__item"><a className="menu__link" href="https://www.google.com/">Services</a></li>
        <li className="menu__item"><a className="menu__link" href="https://www.google.com/">Team</a></li>
        <li className="menu__item"><a className="menu__link" href="https://www.google.com/">Contact</a></li>

      </ul>
      <p className="last">&copy;2023 Juan José Barrera Linde | All Rights Reserved</p>
    </footer>
  )
}
