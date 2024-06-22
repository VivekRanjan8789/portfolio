import React from 'react'
import './skills.css'
import AppDesign from '../../assets/AppDesign.png';
import WebDesign from '../../assets/WebDesign.png';
import UIDesign from '../../assets/UIDesign.png';

const Skills = () => {
  return (
    <div id="skills">
        <div className="skillTitle">What I do</div>
        <div className="skillDesc">I am a skilled passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS, JavaScript, as well as I can also do some backend stuff.</div>
        <div className="skillbars">
             <div className="skillbar">
                  <img src={UIDesign} alt="UIDesign" className="skillBarImg simg" />
                  <div className="skillBarText">
                       <h2>UI/UX design</h2>
                       <p>I can make a website having good ui/ux</p>
                  </div>
             </div>
             <div className="skillbar">
                  <img src={WebDesign} alt="WebDesign" className="skillBarImg simg" />
                  <div className="skillBarText">
                       <h2>Website Design</h2>
                       <p>Desigining is one of the crutial part of the website i can do.</p>
                  </div>
             </div>
             <div className="skillbar">
                  <img src={AppDesign} alt="AppDesign" className="skillBarImg simg" />
                  <div className="skillBarText">
                       <h2>App Design</h2>
                       <p>I can also do app design as well</p>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default Skills;
