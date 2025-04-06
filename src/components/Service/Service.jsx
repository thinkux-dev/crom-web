import React from 'react';
import './Service.css';
import hero_logo from "../../asset/img/service_logo.png";
import ai_automation from "../../asset/img/ai_automation_icon.png";
import branding_img from "../../asset/img/branding_mg.jpg";
import design_bg_img from "../../asset/img/design_bg_img.jpg";
import design_icon_btn from "../../asset/img/design_branding_btn_icon.png";
import guy_with_headphone from "../../asset/img/guy_with_headphone.jpg";
import software_dev_btn_icon from "../../asset/img/software_dev_btn_icon.png";
import start_project_button_icon from "../../asset/img/start_project_button_icon.png";

const Service = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-layout">
          {/* Left side: Header and Buttons */}
          <div className="service-left-column">
            <div className="service-header">
              <h1>SERVICES</h1>
              <p>Power Up that Creative Idea with Cromuniverx</p>
            </div>
            
            <div className="service-sidebar">
              <button className="service-btn active">
                <img src={software_dev_btn_icon} alt="Software Development Icon" />
                <span className='active_txt'>Software Development</span>
              </button>
              
              <button className="service-btn">
                <img src={design_icon_btn} alt="Creative Design Icon" />
                <span>Creative Design & Branding</span>
              </button>
              
              <button className="service-btn">
                <img src={ai_automation} alt="AI Automation Icon" />
                <span>AI Automation</span>
              </button>
            </div>
          </div>
          
          {/* Right side: Service Cards */}
          <div className="service-cards">
            <div className="service-card-container">
              <div className="service-card">
                <div className="card-logo">
                  <img src={hero_logo} alt="Logo" />
                </div>
                <div className="card-content">
                  <h2>Web Development</h2>
                  <p>A full Suite Business Tech Agency, bringing you Innovative software.</p>
                </div>
                <div className="card-image">
                  <img src={guy_with_headphone} alt="Web Development" />
                </div>
              </div>
              <div className="card-highlight-line"></div>
            </div>
            
            <div className="service-card-container">
              <div className="service-card">
                <div className="card-logo">
                  <img src={hero_logo} alt="Logo" />
                </div>
                <div className="card-content">
                  <h2>Product Design</h2>
                  <p>A full Suite Business Tech Agency, bringing you Innovative software.</p>
                </div>
                <div className="card-image">
                  <img src={design_bg_img} alt="Product Design" />
                </div>
              </div>
              <div className="card-highlight-line"></div>
            </div>
            
            <div className="service-card-container">
              <div className="service-card">
                <div className="card-logo">
                  <img src={hero_logo} alt="Logo" />
                </div>
                <div className="card-content">
                  <h2>Branding</h2>
                  <p>A full Suite Business Tech Agency, bringing you Innovative software.</p>
                </div>
                <div className="card-image">
                  <img src={branding_img} alt="Branding" />
                </div>
              </div>
              <div className="card-highlight-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;