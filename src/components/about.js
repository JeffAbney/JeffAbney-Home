import React from 'react';
import headshot from '/home/jeff/git_workspace/JeffAbney/src/static/images/Jeff-headshot.jpg';

export default () => (
  <div className="about" id="about">
    <div className="bio">
      <div className="centering">
        <div className="text-container about-text-container">
          <h3>I'm Jeff Abney.</h3>
          <p>Go getting, problem solving, self-taught and always learning. I bring a unique perspective to Web Development</p>
          <p>My journey into web development has lead me to Javascript with React and Node. My enthusiasm for frontend comes from my desire to reach as many people as possible and make their experiences better.</p>
          <p>I worked with some great people throughout my previous career as a teacher and learned a lot about the importance of personal connections and good communication.</p>
          <p>I'm looking for remote work opportunities and freelance work.</p>
        </div>
      </div>
      <div className="image-container about-image-container">
        <img className="headshot" src={headshot} alt="Image of Jeff Abney"/>
      </div>
    </div>
    <div className="skills">
      <h2>What do I do?</h2>
      <p>- HTML, CSS, SCSS</p>
      <p>- Javascript</p>
      <p>- React</p>
      <p>- Node</p>
      <div className="btn-container">
      <a href="#contact">Need a site?</a>
      <a href="JeffAbneyResume.pdf" target="_blank">
        Learn more
      </a>
      </div>
    </div>
    
      
    
  </div>
  )