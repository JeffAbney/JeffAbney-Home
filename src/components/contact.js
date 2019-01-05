import React from 'react';
import arrow from "/home/jeff/git_workspace/JeffAbney/src/static/images/thin_arrow.png";

export default () => (
  <div className="contact" id="contact">
    <div className="contact-text">
      <p>I'm available for work and I would love to hear about your project.</p>
      <p>Send me an email at <a href="mailto:jeffmabney@gmail.com">jeffmabney@gmail.com</a></p>
      <p>Or contact me via social media.</p>
      <img src={arrow} alt="arrow point to social media icons"></img>
    </div>
  </div>

)