import React from 'react'
import './intro.css'
import Profile from '../../assets/profile.png'
import { Link } from "react-scroll";

export const Intro = () => {
  return (
    <section className="introContainer">
      <h1>
        Hi, I'm <span className="introSpan">GAME</span>
      </h1>
      <h2>Game Developer</h2>
      <p>
        Excited to apply my game development skills in a vibrant role, crafting
        top-notch gaming experiences.
      </p>
      <div className="introImageContainer">
        <img src={Profile} alt="proffile" className="bg" />
      </div>
      {/* <Link>
        <button className="introButton">Hire Me</button>
      </Link> */}
      <p className="Quote">
        "Coding is not just a skill; it's the art of turning imagination into
        reality in the digital realm."
      </p>
      
      <Link 
      className="scrollDown"
      activeClass="active"
      to="work"
      spy={true}
      smooth={true}
      offset={-40}
      duration={800}
      >
        <p>Project Click !!!</p>
        <div className="arrow"></div>
      </Link>
    </section>
  );
};

export default Intro