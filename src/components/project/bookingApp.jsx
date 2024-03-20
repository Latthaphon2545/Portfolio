import React from "react";
import "./project.css";
import Booking from "../../assets/video/booking.mp4";

export const Project1 = () => {
  document.title = "Queue Booking App";
  return (
    <div className="Project">
      <a className="ProjectTitle">
        <span>Queue Booking App</span>
      </a>
      <h2>Flutter</h2>
      <div className="des">
        <video controls>
          <source src={Booking} type="video/mp4" />
        </video>
        <p>
          To streamline the restaurant booking process, improve customer
          experience, and potentially increase restaurant capacity by offering
          real-time table availability and a queue management system
        </p>
      </div>
      <br></br>
      <div className="role">
        <h3>My Role</h3>
        <p>Full Stack Developer</p>
      </div>
      <div className="detail">
        <ul>
          <a
            href="https://www.canva.com/design/DAF_-dGMEsg/OVuAA1uS4rIgNtovTTC0dw/view?utm_content=DAF_-dGMEsg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
          >
            <button>Poster</button>
          </a>
          <a
            href="https://github.com/Latthaphon2545/Mobile.git"
            target="_blank"
          >
            <button>GitHub</button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Project1;
