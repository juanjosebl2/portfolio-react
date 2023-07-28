import './NavBar.css';
import { Link } from 'react-scroll';
import { FcGraduationCap } from "react-icons/fc";

const NavBar = () => {
  
  return (
    <>
      <nav>
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
