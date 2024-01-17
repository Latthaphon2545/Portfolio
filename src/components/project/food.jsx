import React from 'react'
import food from '../../assets/video/online.mp4'

export const Food = () => {
    document.title = "Online Food Ordering"
  return (
    <div className='Project'>
      <a className="ProjectTitle">
        <span>Online Food Ordering</span>
      </a>
      <h2>Unity</h2>
      <div className="des">
        <video controls muted>
          <source src={food} type="video/mp4"/>
        </video>
        <p>Restaurant system simplifies ordering, payments, and 
            safety with online menus and contactless transactions.
        </p>
      </div>
      <br></br>
      <div className="role">
        <h3>My Role</h3>
        <p>UX/UI Design, Web Developer</p>
      </div>
      <div className="detail">
        <ul>
          <a href='https://docs.google.com/presentation/d/1ONVzvDBIZIZ1TGu56-_96zxAgEG5sUhaxZztIwakZ-A/edit?usp=sharing'><button>Document</button></a>
          <a href='https://github.com/Latthaphon2545/IWP23-08-Orderingfood-restaurantPOS.git'><button>GitHub</button></a>
        </ul>
      </div>
    </div>
  )
}

export default Food
