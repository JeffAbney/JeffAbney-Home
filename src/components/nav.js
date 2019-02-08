import React from 'react';
import logoHeader from "/home/jeff/git_workspace/JeffAbney/src/static/images/logo_header.png";

export default () => (
  <div className="nav-bar">
    <a href="http://jeffabney.com" className="logo-container">
      <img alt="Jeff Abney logo" src={logoHeader} className="header-logo"/>
    </a>
    <div className="menu">
      <a href="#home" className="nav-home">HOME</a>
      <a href="#projects" className="projects-home">PROJECTS</a>
      <a href="#about" className="about-home">ABOUT</a>
      <a href="#contact" className="contact-home">CONTACT</a>
    </div>  
  </div>
)