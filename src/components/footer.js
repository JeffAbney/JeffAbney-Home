import React from 'react';

export default () => (
  <div className="footer">
    <div className="logo-container">
      <a href="http://www.JeffAbney.com" >
        <img alt="Jeff Abney logo" src="/dist/images/JEFF_ICON.png" className="logo" />
      </a>
    </div>
    <div className="social-container">
      <a
        href="https://www.instagram.com/jeffmabney"
        target="_blank"
      >
        <img
          alt="Instagram logo"
          src="/dist/images/instagram-logo.png"
          className="social-icon insta"
        />
      </a>
      <a 
        href="https://twitter.com/JeffAbney8"
        target="_blank"
      >
        <img 
          alt="Twitter logo" 
          src="/dist/images/twitter.png" 
          className="social-icon twitter"
        />
      </a>
      <a
        href="https://github.com/JeffAbney"
        target="_blank"
      >
        <img 
          alt="Git Hub logo" 
          src="/dist/images/github-logo.png" 
          className="social-icon github"
        />
      </a>
      
    </div>
    <a className="contact">CONTACT</a>
    <div className="credit">
      Developed by <a>Jeff Abney</a> &amp; Designed by <a>Daniela Trujillo</a>
    </div>
  </div>
)