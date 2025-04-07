import React from 'react';
import './Recent.css';
import logo from "../../asset/img/hero_logo.png";
import sprout_img from "../../asset/img/sprout_img.png";
import sprout_logo from "../../asset/img/sprout_logo.png";
import guy_with_headphone from "../../asset/img/guy_with_headphone.jpg";

const Recent = () => {
  return (
    <div className="recent-section">
      <div className="recent-content">
        {/* Left side with white background */}
        <div className="recent-left">
          <div className="recent-header">
            <h2>RECENT</h2>
            <p>Our recent projects highlights</p>
          </div>
          
          <div className="project-card">
            <div className="project-image-container">
              <img src={sprout_img} alt="Sprout Social" className="sprout-logo" />
            </div>
            
            <div className="project-info">
              <h3>Sprout Digital Campaign</h3>
              <h4>Nike Website (usecase)</h4>
              <p className="company-name">Sprout</p>
            </div>
          </div>
        </div>
        
        {/* Right side with developer image and overlay */}
        <div className="recent-right">
          <div className="developer-image">
            <img src={guy_with_headphone} alt="Developer with headphones" className="developer-img" />
            <div className="overlay"></div>
            
            <div className="content-overlay">
              <div className="sprout-logo-overlay">
                <img src={sprout_logo} alt="Sprout Logo" className="sprout-small-logo" />
              </div>
              <h3>Sprout</h3>
              <p>A full Suite Business Tech Agency, bringing you Innovative software.</p>
              
              <div className="page-indicators">
                <div className="indicator active"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
              </div>
            </div>
          </div>
          
          <div className="corner-logo-container">
            <img src={logo} alt="Company Logo" className="corner-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;