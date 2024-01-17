import React from 'react'
import './project.css'
import M from '../../assets/video/marh.mp4'

export const Project1 = () => {
  document.title = "Marh"
  return (
    <div className='Project'>
      <a className="ProjectTitle">
        <span>MARH</span>
      </a>
      <h2>Stop Motion</h2>
      <div className="des">
        <video controls>
          <source src={M} type="video/mp4"/>
        </video>
        <p>TScientists discover deadly flowers hallucinogenic power, driving villagers to primal instincts. 
          Marh escapes, only to find a global epidemic mirroring his hallucinations.
        </p>
      </div>
      <br></br>
      <div className="role">
        <h3>My Role</h3>
        <p>......</p>
      </div>
    </div>
  )
}

export default Project1
