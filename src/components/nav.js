import React from 'react';
import logoHeader from "/home/jeff/git_workspace/JeffAbney/src/static/images/logo_header.png";

export default (props) => (
  <div className="nav-bar">
    <a href="https://jeffabney.com" className="logo-container">
      <img alt="Jeff Abney logo" src={logoHeader} className="header-logo"/>
    </a>
    <div className="menu">
      <a href="#home" className="btn-nav nav-home" id="nav-home">HOME</a>
      <a href="#projects" className="btn-nav nav-projects" id="nav-projects">PROJECTS</a>
      <a href="#about" className="btn-nav nav-about" id="nav-about">ABOUT</a>
      <a href="#contact" className="btn-nav nav-contact" id="nav-contact">CONTACT</a>
    </div>  
  </div>
)