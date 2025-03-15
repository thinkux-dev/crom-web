import React from 'react';
import './Hero.css';
import logo from "../../asset/img/crom_logo.png"
import portfolio from "../../asset/img/portfolio.png"

const Hero = () => {
  return (
    <div className="hero-body">
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
          <button className='second_hero_btn'>Free Cons</button>
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