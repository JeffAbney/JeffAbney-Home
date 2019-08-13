import React from 'react';
import headshot from '/home/jeff/git_workspace/JeffAbney/src/static/images/Jeff-headshot.jpg';

export default () => (
  <div className="about" id="about">
    <div className="bio">
      <div className="centering">
        <div className="text-container about-text-container">
          <h3>I'm Jeff Abney.</h3>
          <p>I worked as a teacher for 7 years, and though it was rewarding, I felt a need to create something more tangible.</p>
          <p>I started building websites and mobile apps as a creative outlet.</p>
          <p>My wife, Daniela and I are preparing to build our first home and after doing some reasearch on architecture websites I found that many firms had created beautiful buildings, but their websites lacked the excitement that their projects evoked.</p>
          <p>Since then I have been on a mission to help businesses tell their stories and show clients what they are made of.</p>
        </div>
      </div>
      <div className="image-container about-image-container">
        <img className="headshot" src={headshot} alt="Image of Jeff Abney"/>
      </div>
    </div>
    <div className="skills">
      <h2>What do I do?</h2>
      <p>- HTML, CSS, SCSS, JS</p>
      <p>- React</p>
      <p>- Node</p>
      <p>- React Native</p>
      <p>- MongoDB & MySQL</p>
      <div className="btn-container">
      <a href="#contact">Need a site?</a>
      <a href="JeffAbneyResume.pdf" target="_blank">
        Learn more
      </a>
      </div>
    </div>
    
      
    
  </div>
  )