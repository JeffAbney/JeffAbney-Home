import React from 'react';
import headshot from '/home/jeff/git_workspace/JeffAbney/src/static/images/Jeff-headshot.jpg';

export default () => (
  <div className="about" id="about">
    <div className="text-container about-text-container">
      <h3>I'm Jeff Abney.</h3>
      <p>Go getting, problem solving, self-taught and always learning. Bringing a unique perspective to Web Development</p>
      <p>Born and raised near Chicago, I've lived and traveled in a variety of places.</p>
      <p>Looking for remote work opportunities as well as freelance work.</p>
    </div>
    <div className="image-container about-image-container">
      <img className="headshot" src={headshot} alt="Image of Jeff Abney"/>
    </div>
  </div>
  )