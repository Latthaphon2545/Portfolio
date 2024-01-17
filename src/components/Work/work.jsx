import React from 'react'
import './work.css'
import As from '../../assets/as.png'
import Riddles from "../../assets/r.png";
import Marh from "../../assets/m.png";
import Socket from "../../assets/soc.png";
import Course from "../../assets/course.png";
import food from "../../assets/food.png";
import Covid from '../../assets/covid.png'
import { Link } from 'react-router-dom';

export const Work = () => {
  return (
    <section id="work">
      <div className="workContainer">
      <a className="worktitle">
        <span>My Portffolio</span>
      </a>
      <p className="worksubtitle">
        Crafting immersive digital experiences with a touch of creativity and
        precision, bringing ideas to life
      </p>

      <div className="works">

        <Link to="/project/AfterShcool" className="work">
            <img src={As}></img>
            <div className="workdetail">
              <h3>AFTER SCHOOL</h3>
              <p>Unity</p>
            </div>
        </Link>

        <Link to="/project/Tower" className="work">
          <img src={Riddles}></img>
          <div className="workdetail">
            <h3>RIDDLES OF THE TOWER OF MATHEMATICS</h3>
            <p>Unity</p>
          </div>
        </Link>

        <Link to="/project/CovidWar" className="work">
          <img src={Covid}></img>
          <div className="workdetail">
            <h3>Covid19War</h3>
            <p>Python</p>
          </div>
        </Link>

        <Link to="/project/ReloadRocket" className="work">
          <img src={Socket}></img>
          <div className="workdetail">
            <h3>Reload Rocket</h3>
            <p>UX/UI Design</p>
          </div>
        </Link>

        <Link to="/project/CourseRegistration" className="work">
          <img src={Course}></img>
          <div className="workdetail">
            <h3>Course Registration</h3>
            <p>UX/UI Design</p>
          </div>
        </Link>

        <Link to="/project/OnlineFoodOrdering" className="work">
          <img src={food}></img>
          <div className="workdetail">
            <h3>Online Food Ordering</h3>
            <p>Web</p>
          </div>
        </Link>

        <Link to="/project/Marh" className="work">
          <img src={Marh}></img>
          <div className="workdetail">
            <h3>MARH</h3>
            <p>Stop Motion</p>
          </div>
        </Link>
      </div>
      </div>
    </section>
  );
}

export default Work
