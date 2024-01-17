import React from 'react'
import './project.css'
import Riddles from "../../assets/video/tower.mp4"

export const Project1 = () => {
  document.title = "RIDDLES OF THE TOWER OF MATHEMATICS"
  return (
    <div className='Project'>
      <a className="ProjectTitle">
        <span>RIDDLES OF THE TOWER OF MATHEMATICS</span>
      </a>
      <h2>Unity</h2>
      <div className="des">
        <video controls muted>
          <source src={Riddles} type="video/mp4"/>
        </video>
        <p>Tower of Mathematics for children who are 
          not good at math in elementary school.
        </p>
      </div>
      <br></br>
      <div className="role">
        <h3>My Role</h3>
        <p>Game Design, Game Developer</p>
      </div>
      <div className="detail">
        <ul>
          <a href='https://www.canva.com/design/DAFRWkijjlE/IeaUaIDFIR59JbHbcF_jXQ/edit?utm_content=DAFRWkijjlE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'><button>Document</button></a>
          <a href='https://github.com/Latthaphon2545/oop-proj22-6256.git'><button>Game</button></a>
        </ul>
      </div>
    </div>
  )
}

export default Project1
