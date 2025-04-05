import React from 'react';
import './Business.css';
import business_section_bg from "../../asset/img/business_section_bg_img.jpg";
import business_bean_img from "../../asset/img/business_bean_img.png";
import Vector from "../../asset/img/Vector.png";
import Arrow from "../../asset/img/arrow.png";

const Business = () => {
  return (
    <section className="business-section">
      {/* Section Labels */}
      <div className="section-labels-container">
        <h2 className="section-label">Your Business</h2>
        <h2 className="section-label">Your Development</h2>
        <h2 className="section-label">Your Design</h2>
      </div>

      <div className="business-container">
        {/* Business Intelligence Section */}
        <div className="business-card business-intelligence">
          <div className="card-header">
            <span className="category">Corporate</span>
            <img src={Arrow} alt="Arrow icon" className="arrow-icon" />
          </div>
          <div className="card-content">
            <h2 className="card-title">
              <span>Business </span>
              <span>Intelligence</span>
            </h2>
            <div className="card-services">
              <span className="service">Consultation</span>
              <span className="service">Analysis</span>
              <span className="service">Solution</span>
            </div>
          </div>
        </div>

        {/* Software Development Section */}
        <div className="business-card software-development">
          <div className="card-header">
            <span className="category">Engineering</span>
          </div>
          <div className="card-content">
            <h2 className="card-title">
              <span>Software </span>
              <span>Development</span>
            </h2>
            <div className="card-services">
              <span className="service">Conceptualize</span>
              <span className="service">Design</span>
              <span className="service">Develop</span>
            </div>
          </div>
        </div>

        {/* AI Automation Section */}
        <div className="business-card ai-automation">
          <div className="card-header">
            <span className="category">Artificial Intelligence</span>
          </div>
          <div className="card-content">
            <h2 className="card-title">
              <span>AI </span>
              <span>Automation</span>
            </h2>
            <div className="card-services">
              <span className="service">Process review</span>
              <span className="service">Funnel</span>
              <span className="service">Automate</span>
            </div>
          </div>
        </div>

        {/* Design Section */}
        <div className="design-section">
          <div className="design-content">
            <div className="design-media">
              {/* Vector background behind bean image */}
              <img src={Vector} alt="Vector background" className="vector-bg" />
              
              {/* Background image with black overlay */}
              <div className="background-container">
                <img src={business_section_bg} alt="Design sketch" className="sketch-img" />
                <div className="black-overlay"></div>
              </div>
              
              {/* Person image on top */}
              <div className="person-container">
                <img src={business_bean_img} alt="Business bean" className="bean-overlay" />
              </div>
            </div>
            
            {/* Text directly on the background */}
            <div className="design-text">
              <h2 className="design-title">
                <span>Creative Design</span>
                <span>& Branding</span>
              </h2>
              <div className="design-buttons">
                <button className="portfolio-btn">See Portfolio</button>
                <button className="call-btn">Book a Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Business;