import React from 'react'
import './project.css'
import Covid from '../../assets/video/covid.mp4'

export const Project1 = () => {
  document.title = "Covid19War"
  return (
    <div className='Project'>
      <a className="ProjectTitle">
        <span>Covid19War</span>
      </a>
      <h2>Python</h2>
      <div className="des">
        <video controls>
          <source src={Covid} type="video/mp4"/>
        </video>
        <p>Covid19War is an engaging 2D shooter game developed using the Pygame library. 
          Players control a character tasked with defeating COVID-19 viruses and confronting 
          formidable bosses. The game incorporates power-up items, a scoring system, immersive sound effects, 
          and progressive difficulty for an enjoyable gaming experience.
        </p>
      </div>
      <br></br>
      <div className="role">
        <h3>My Role</h3>
        <p>Game Design, Game Developer</p>
      </div>
      <div className="detail">
        <ul>
          <a href='https://github.com/Latthaphon2545/Covid19.git'><button>Game</button></a>
        </ul>
      </div>
    </div>
  )
}

export default Project1
