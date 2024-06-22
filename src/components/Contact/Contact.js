import React from 'react'
import './contact.css'

import walmart from '../../assets/walmart.png';
import facebook from '../../assets/facebook.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebookIcon from '../../assets/facebookIcon.png'
import instagramIcon from '../../assets/instagramIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
import youtubeIcon from '../../assets/youtubeIcon.png'


const Contact = () => {
  return (
    <> <div id="contactPage">
            <div id="clients">
                    <h1 className="contactPageTitle">My Clients</h1>
                    <p className="clientDesc">
                        I had the opportunity to work with a diverse group of companies
                        Some of the notable companies i have worked with includes                 
                    </p>
                    <div className="clientImgs">
                         <img src={facebook} alt="facebook" className="clientImg" />
                         <img src={adobe} alt="adobe" className="clientImg" />
                         <img src={walmart} alt="walmart" className="clientImg" />
                         <img src={microsoft} alt="microsoft" className="clientImg" />
                    </div>
            </div>

            <div id="contact">
                  <h2 className="contactPageTitle">Contact Me</h2>
                  <span className="contactDesc">please fill out the form below to discuss any work opportunities</span>
                  <form className="contactForm">
                         <input type="text" className="name" placeholder='Your Name'/>
                         <input type="email" className="email" placeholder='Your Email'/>
                         <textarea name="message"  rows="5" className='msg' placeholder='Your Message'></textarea>
                         <button type="submit" value="send" className="submitBtn" >Submit</button>
                         <div className="links">
                                <img src={facebookIcon} alt="" className="link" />
                                <img src={instagramIcon} alt="" className="link insta" />
                                <img src={linkedinIcon} alt="" className="link" />
                                <img src={youtubeIcon} alt="" className="link" />
                         </div>
                  </form>

                
            </div>
       </div>
    </>
  )
}

export default Contact
