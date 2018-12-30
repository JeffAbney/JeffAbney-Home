import React from 'react';
import headshot from '/home/jeff/git_workspace/JeffAbney/src/static/images/Jeff-headshot.jpg';

export default () => (
  <div className="about" id="about">
    <div className="bio">
      <div className="centering">
        <div className="text-container about-text-container">
          <h3>I'm Jeff Abney.</h3>
          <p>Go getting, problem solving, self-taught and always learning. Bringing a unique perspective to Web Development</p>
          <p>Born and raised near Chicago, I've lived and traveled in a variety of places.</p>
          <p>Looking for remote work opportunities and freelance work.</p>
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
      <button className="button">Need a site?</button>
    </div>
    <div className="resume">
      <h3>Download my resume</h3>
      <button className="button">Learn more</button>
    </div>
  </div>
  )