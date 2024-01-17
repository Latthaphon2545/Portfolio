import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import Menu from "../../assets/menuMob.png";

export const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="NavBar__links">
        <Link
          activeClass="active"
          to="introContainer"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItems"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="desktopMenuListItems"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="desktopMenuListItems"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="experiencePage"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="desktopMenuListItems"
        >
          Experience
        </Link>
      </div>
      <button
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="NavBarButton"
      >
        Contact Me
      </button>

      <img src={Menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
      <div className="NavMenu__links" style={{ display: showMenu ? "flex" : "none"}}>
        <Link activeClass="active" to="introContainer" spy={true} smooth={true} offset={-100} duration={500} className="ListItems" onClick={() => {setShowMenu(false);}}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={500} className="ListItems" onClick={() => {setShowMenu(false);}}>Skills</Link>
        <Link activeClass="active" to="work" spy={true} smooth={true} offset={-40} duration={500} className="ListItems" onClick={() => {setShowMenu(false);}}>Projects</Link>
        <Link activeClass="active" to="experiencePage" spy={true} smooth={true} offset={-40} duration={500} className="ListItems" onClick={() => {setShowMenu(false);}}>Experience</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-40} duration={500} className="ListItems" onClick={() => {setShowMenu(false);}}>Contact Me</Link>
      </div>
    </nav>
  );
}

export default Navbar
