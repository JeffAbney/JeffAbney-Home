import React from 'react';

export default () => (
  <div className="nav-bar">
    <div className="logo-container">
      <img alt="Jeff Abney logo" src="/dist/images/logo_header.png" className="header-logo"/>
    </div>
    <div className="menu">
      <a href="#home" className="nav-home">HOME</a>
      <a href="#about" className="about-home">ABOUT</a>
      <a href="#projects" className="projects-home">PROJECTS</a>
      <a href="#contact" className="contact-home">CONTACT</a>
    </div>  
  </div>
)