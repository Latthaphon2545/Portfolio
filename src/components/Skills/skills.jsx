import React from 'react'
import './skills.css'
import Game from '../../assets/game.png'
import Unity from '../../assets/unity.png'
import C from '../../assets/c-sharp.png'
import Python from '../../assets/python.png'
import Html from '../../assets/html-5.png'
import Css from '../../assets/css-3.png'
import Javascript from '../../assets/java-script.png'
import Node from '../../assets/nodejs.png'
import Flutter from '../../assets/flutter.png'
import Ux from '../../assets/ui.png'

export const Skills = () => {
  return (
    <section id='skills'>
      <a className='skillTitle'>
        <span>What I Do</span>
      </a>
      <span className='skillSubtitle'>
        I have extensive expertise in interactive media, excelling in the
        creation of user-friendly UI/UX designs for applications and websites.
        Furthermore, I possess a robust foundation in artificial intelligence
        with a specialization in machine learning, offering a compelling option
        for those interested in AI studies. Additionally, my skill set extends
        to software development, where I demonstrate proficiency in coding for a
        wide range of applications and websites, showcasing a deep understanding
        of this multifaceted industry.
      </span>

      <div className='skillsBars'>
        <div className='skillBar'>
          <img src={Game} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>Game Design</h2>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Unity} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>Unity</h2>
            <p>6/10 (Additionally)</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={C} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>C#</h2>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Python} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>Python</h2>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Html} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>HTML</h2>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Css} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>CSS</h2>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Javascript} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>Java-script</h2>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Node} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>NodeJs</h2>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Flutter} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>Flutter</h2>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Ux} className='skillBarImg'></img>
          <div className='skillBarTxet'>
            <h2>UX/UI Design</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
