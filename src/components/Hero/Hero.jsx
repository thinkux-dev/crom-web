import React from 'react';
import './Hero.css';
import logo from "../../asset/img/crom_logo.png"
import portfolio from "../../asset/img/portfolio.png"
import img_1 from "../../asset/img/image-vertical.png"

const Hero = () => {
  return (
    <div className="hero-body">
      {/* Vertically scrolling image groups */}
      <div className="vertical-image-groups">
        {[1, 2, 3].map((group) => (
          <div key={group} className={`image-group group-${group}`}>
            {[1, 2, 3, 4, 5].map((img) => (
              <img
                key={img}
                src={img_1}
                alt={`Group ${group} Image ${img}`}
                className="group-image"
              />
            ))}
          </div>
        ))}
      </div>
        
      <div className='bg_img_body'>
        <img 
          src={logo}
          alt=''
          className='bg_img'
        />
        <small>
          Power Up that Creative Idea with Cromuniverx
        </small>
        <div className='hero_btns'>
          <button className='first_hero_btn'>Start Project</button>
          <button className='second_hero_btn'>Free Consultation</button>
        </div>
        <img 
          src={portfolio}
          alt=''
          className='portfolio_img'
        />
      </div>
    </div>
  );
}

export default Hero;