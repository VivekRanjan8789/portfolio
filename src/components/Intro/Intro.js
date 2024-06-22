import React from 'react'
import "../Intro/intro.css"
import image from '../../assets/image.png';
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <>
      <div id="intro">
           <div className="introcontent">
                <span className="hello">Hello,<br/></span>
                <span className="introText">I'm <span className="name">Vivek</span><br />Website Designer</span>
                <p className="intropara">I am a skilled and passionate web designer with experiences<br /> in creating visually attracting and user-friendly websites.</p>
                <Link className='hirebtn'><button className="btn"><i class="fa-regular fa-handshake btnimg"></i>Hire me</button></Link>
           </div>
           <img src={image} alt="image" className="bg" />
      </div>
    </>
  )
}

export default Intro
