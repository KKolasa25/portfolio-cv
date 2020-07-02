import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="main-div">
          <div className="banner-intro">
            my projects
          </div>
          <div className="projects-div look_content">
            <div className="project look"></div>
            <div className="project look"></div>
            <div className="project look"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;