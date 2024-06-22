import React from 'react'
import './works.css'
import portfolio1 from "../../assets/portfolio1.png"
import portfolio2 from "../../assets/portfolio2.png"
import portfolio3 from "../../assets/portfolio3.png"
import portfolio4 from "../../assets/portfolio4.png"
import portfolio5 from "../../assets/portfolio5.png"
import portfolio6 from "../../assets/portfolio6.png"

const Works = () => {
  return (
    <div id="work">
        <h2 className="worksTitle">My Portfolio</h2>
        <div className="worksDesc">I look myself positive as i believe that a small changes impact a lot in websites. I am excited to bring myself in profession businesses and want to contribute to the comapany from different perspective.</div>
        <div className="worksImgs">
            <img src={portfolio1} alt="portfolio1" className="worksImg" />
            <img src={portfolio2} alt="portfolio2" className="worksImg" />
            <img src={portfolio3} alt="portfolio3" className="worksImg" />
            <img src={portfolio4} alt="portfolio4" className="worksImg" />
            <img src={portfolio5} alt="portfolio5" className="worksImg" />
            <img src={portfolio6} alt="portfolio6" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </div>
  )
}

export default Works
