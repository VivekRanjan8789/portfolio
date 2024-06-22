import React, { useState } from 'react'
import '../navbar/navbar.css'
import { Link } from 'react-scroll'
import logoImg from "../../assets/logo.png"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>  
        <div className="navbar">
             <img src={logoImg} alt ="img" className='logo'/> 
             <div className="desktopMenu">
                  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Home</Link>
                  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">About</Link>
                  <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Portfolio</Link>
                  <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Clients</Link>                  
             </div>
             <button className="desktopmenuBtn" onClick={() => {
                 document.getElementById('contact').scrollIntoView({behavior: 'smooth', offset: '-100'})
             }}>
                <i class="fa-regular fa-message msg-icon"></i>Contact Me
            </button>

            <i class="fa-solid fa-bars mobMenu" onClick={ () => setShowMenu(!showMenu)}></i> 
             <div className="navMenu" style = {{display: showMenu? 'flex' : 'none'}}>
                  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="Listitem" onClick={()=> {setShowMenu(false)}}>Home</Link>
                  <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="Listitem" onClick={()=> {setShowMenu(false)}}>About</Link>
                  <Link activeClass='active' to='work' spy={true} smooth={true} offset={-100} duration={500} className="Listitem" onClick={()=> {setShowMenu(false)}}>Portfolio</Link>
                  <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="Listitem" onClick={()=> {setShowMenu(false)}}>Clients</Link>
                  <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="Listitem" onClick={()=> {setShowMenu(false)}}>Contact</Link>                  
             </div>


        </div>

    </>
  )
}

export default Navbar
