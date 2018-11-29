import React from 'react';

export default () => (
  <div className="nav-bar">
    <div className="logo-container">
      <img alt="Jeff Abney logo" src="/dist/images/logo_header.png" className="header-logo"/>
    </div>
    <div className="menu">
      <a>HOME</a>
      <a>ABOUT</a>
      <a href="#projects">PROJECTS</a>
      <a>CONTACT</a>
    </div>  
  </div>
)