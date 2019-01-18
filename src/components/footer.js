import React from 'react';
import logo from "/home/jeff/git_workspace/JeffAbney/src/static/images/JEFF_ICON.png";
import instagram from "/home/jeff/git_workspace/JeffAbney/src/static/images/instagram-logo.png";
import twitter from "/home/jeff/git_workspace/JeffAbney/src/static/images/twitter.png";
import github from "/home/jeff/git_workspace/JeffAbney/src/static/images/github-logo.png";

export default () => (
  <div className="footer">
    <div className="logo-container">
      <a href="http://www.JeffAbney.com" >
        <img alt="Jeff Abney logo" src={logo} className="logo" />
      </a>
    </div>
    <div className="social-container">
      <a
        href="https://www.instagram.com/jeffmabney"
        target="_blank"
      >
        <img
          alt="Instagram logo"
          src={instagram}
          className="social-icon insta"
        />
      </a>
      <a 
        href="https://twitter.com/JeffAbney8"
        target="_blank"
      >
        <img 
          alt="Twitter logo" 
          src={twitter} 
          className="social-icon twitter"
        />
      </a>
      <a
        href="https://github.com/JeffAbney"
        target="_blank"
      >
        <img 
          alt="Git Hub logo" 
          src={github}
          className="social-icon github"
        />
      </a>
      
    </div>
    <div className="credit">
      Developed by <a href="http://jeffabney.com" target="_blank">Jeff Abney</a> &amp; Designed by <a href="https://daniela-trujillo.com" target="_blank">Daniela Trujillo</a>
    </div>
  </div>
)