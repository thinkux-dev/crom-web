import React from 'react';
import './Hero.css';
import hero_logo from "../../asset/img/hero_logo.png";
import start_project_btn_icon from "../../asset/img/start_project_button_icon.png";

const Hero = () => {
  return (
    <div className="hero-body">
      {/* Gradient overlays */}
      <div className="gradient-left"></div>
      <div className="gradient-right"></div>
      
      {/* Corner accents */}
      <div className="corner-accent top-right"></div>
      <div className="corner-accent bottom-left"></div>
      
      {/* Main Hero Content */}
      <div className="hero-content">
        <div className="logo-icon">
          <img src={hero_logo} alt="Cromuniverx Logo" />
        </div>
        
        <h1 className="hero-title">
          <span className="title-white">Power Up </span>
          <span className="title-green">that</span><br />
          <span className="title-white">Creative </span>
          <span className="title-green">Idea </span>
          <span className="title-white">with</span><br />
          <span className="title-green">Crom</span>
          <span className="title-white">univerx</span>
        </h1>
        
        <p className="hero-description">
          a full Suite Business Tech Agency, bringing you innovative software,
          AI automation, and creative design solutions that propel your
          business forward
        </p>
        
        <div className="hero-btns">
          <button className="first_hero_btn">
            <img src={start_project_btn_icon} alt="Start Project Icon" className="btn-icon" />
            Start Project
          </button>
          <button className="second_hero_btn">Free Consultation</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;