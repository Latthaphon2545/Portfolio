import React from 'react'
import './project.css'
import As from '../../assets/video/after_school.mp4'

export const Project1 = () => {
  document.title = "After Shcool"
  return (
    <div className="Project">
      <a className="ProjectTitle">
        <span>After Shcool</span>
      </a>
      <h2>Unity</h2>
      <div className="des">
        <video controls>
          <source src={As} type="video/mp4" />
        </video>
        <p>
          The protagonist, Tsuki,” falls asleep and wakes up in the classroom
          after midnight. She later discovered that she had entered the
          dimension of the afterlife. She must find a way to escape the school
          while avoiding three ghosts that would try to kill her. She must
          acquire three offerings to sacrifice to the ancient shrine.
        </p>
      </div>
      <br></br>
      <div className="role">
        <h3>My Role</h3>
        <p>Game Design, Game Developer</p>
      </div>
      <div className="detail">
        <ul>
          <a
            href="https://drive.google.com/file/d/1h--JoItnqOBw50h-Ty3Zn3qJxqxhIcyc/view?usp=sharing"
            target="_blank"
          >
            <button>Document</button>
          </a>
          <a
            href="https://github.com/Latthaphon2545/After-School.git"
            target="_blank"
          >
            <button>GitHub</button>
          </a>
          <a
            href="https://games-lat.itch.io/after-school?secret=K5blYNO4sUPzsKJOsEPTwOtqozY"
            target="_blank"
          >
            <button>Game</button>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Project1
