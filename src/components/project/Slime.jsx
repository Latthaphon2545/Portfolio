import React from 'react'
import './project.css'
import As from '../../assets/video/Slime.mov'

export const Slime = () => {
  document.title = "Slime"
  return (
    <div className='Project'>
      <a className="ProjectTitle">
        <span>Slime</span>
      </a>
      <h2>Unity</h2>
      <div className="des">
        <video controls>
          <source src={As} type="video/mp4" />
        </video>
        <p>
          I've always been fascinated by 3D games, but I had never tried making one myself.
          I decided to take the plunge and create my first 3D game. It was an amazing experience,
          and I learned a lot along the way.
        </p>
      </div>
      <br></br>
      <div className="role">
        <h3>My Role</h3>
        <p>Game Design, Game Developer</p>
      </div>
      <div className="detail">
        <ul>
          <a href='https://github.com/Latthaphon2545/Slime'><button>GitHub</button></a>
        </ul>
      </div>
    </div>
  )
}

export default Slime
