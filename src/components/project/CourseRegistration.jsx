import React from 'react'
import Couse from '../../assets/course.png'
import { Link as ScrollLink } from 'react-scroll';

export const CourseRegistration = () => {
    document.title = "Course Registration"
  return (
    <div className='Project'>
      <a className="ProjectTitle">
        <span>Course Registration</span>
      </a>
      <h2>UX/UI Design</h2>
      <div className="des">
        <img src={Couse}></img>
      </div>
      <br></br>
      <div className="role">
        <h3>My Role</h3>
        <p>UX/UI Design</p>
      </div>
      <div className="detail">
        <ul>
          <a href='https://www.canva.com/design/DAFwUFwzK_o/4zd3I7LZYt7gYWD07NF9DA/edit?utm_content=DAFwUFwzK_o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'><button>Document</button></a>
          <a href='https://www.figma.com/proto/a3L7pdrp2zeT7BkBkxyuXk/course--registration?page-id=0%3A1&node-id=11-23&starting-point-node-id=15%3A3690&mode=design&t=CR2MJrFEiR71DAlz-1'><button>Prototype</button></a>
        </ul>
      </div>
    </div>
  )
}

export default CourseRegistration