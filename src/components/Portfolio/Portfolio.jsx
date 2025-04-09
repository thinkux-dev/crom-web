import React from 'react';
import './Portfolio.css';
import deepseek_logo from "../../asset/img/deepseek-logo.png";
import adapt_icon from "../../asset/img/adapt_icon.png";
import anthropic_logo from "../../asset/img/anthropic-logo.png";
import gemini_logo from "../../asset/img/gemini-logo.png";
import innovate_icon from "../../asset/img/innovate_icon.png";
import meta_logo from "../../asset/img/meta-logo.png";
import openai_logo from "../../asset/img/openai-logo.png";
import scale_icon from "../../asset/img/scale_icon.png";

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      {/* Psychology Section */}
      <h2 className="section-title">Psychology</h2>
      
      <div className="psychology-grid">
        <div className="psychology-item">
          <div className="icon-wrapper">
            <img src={adapt_icon} alt="Adapt" className="psychology-icon" />
          </div>
          <span>Adapt</span>
        </div>
        
        <div className="psychology-item">
          <div className="icon-wrapper">
            <img src={innovate_icon} alt="Innovate" className="psychology-icon" />
          </div>
          <span>Innovate</span>
        </div>
        
        <div className="psychology-item">
          <div className="icon-wrapper">
            <img src={scale_icon} alt="Scale" className="psychology-icon" />
          </div>  
          <span>Scale</span>
        </div>
      </div>

      {/* Leveraging Section */}
      <div className="leveraging-section">
        <div className="leveraging-title">
          <h3>Leveraging</h3>
          <p>on top tools & AI Models</p>
        </div>
        
        <div className="company-logos">
          <div className="logo">
            <img src={anthropic_logo} alt="Anthropic" className="company-logo" />
          </div>
          <div className="logo">
            <img src={openai_logo} alt="OpenAI" className="company-logo" />
          </div>
          <div className="logo">
            <img src={meta_logo} alt="Meta" className="company-logo" />
          </div>
          <div className="logo">
            <img src={deepseek_logo} alt="Deepseek" className="company-logo" />
          </div>
          <div className="logo">
            <img src={gemini_logo} alt="Gemini" className="company-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;