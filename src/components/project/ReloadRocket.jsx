import React from 'react'
import soc from '../../assets/soc.png'

export const ReloadRocket = () => {
  document.title = "Reload Rocket"
  return (
    <div className='Project'>
      <a className="ProjectTitle">
        <span>Reload Rocket</span>
      </a>
      <h2>UX/UI Design</h2>
      <div className="des">
        <img src={soc}></img>
        <p>Game top-up website</p>
      </div>
      <br></br>
      <div className="role">
        <h3>My Role</h3>
        <p>UX/UI Design</p>
      </div>
      <div className="detail">
        <ul>
          <a href='https://www.canva.com/design/DAFyL2ZkY2w/vIlpWp9G07UATH764oPJPA/edit?utm_content=DAFyL2ZkY2w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'><button>Document</button></a>
          <a href='https://www.figma.com/file/a3P3rmpvwAYY3DpNcBc8w0/Final_Group3-Game_top-up?type=design&t=NKGlb9RmCD8cB1m0-6'><button>Prototype</button></a>
        </ul>
      </div>
    </div>
  )
}

export default ReloadRocket