import React from 'react';
import Slider from './slider.js';

import clockImg from '/home/jeff/git_workspace/JeffAbney/dist/images/pomodoro.png';
import drumMachineImg from '/home/jeff/git_workspace/JeffAbney/dist/images/pomodoro.png';
import randomQuoteImg from '/home/jeff/git_workspace/JeffAbney/src/static/images/quote.png';


const proArr = [
  {
    id: 1,
    title: 'Pomodoro Clock',
    text: 'React - CSS - Animation',
    image: clockImg
  },
  {
    id: 2,
    title: 'Drum Machine',
    text: 'React - CSS',
    image: drumMachineImg
  },
  {
    id: 3,
    title: 'Random Quote Machine',
    text: 'React - API Connected - CSS',
    image: randomQuoteImg
  },
  {
    id: 4,
    title: 'Calculator',
    text: 'Javascript - React - CSS',
    image: randomQuoteImg
  },
  {
    id: 5,
    title: 'Random Quote Machine',
    text: 'React - API Connected - CSS',
    image: randomQuoteImg
  }
];


const projects = () => {

  const projectList = proArr.map((pro) =>
    <div
      className={`project ${pro.id % 2 === 0 ? 'right' : 'left'}`}
      id={`project-${pro.id}`}
      key={pro.id}
    >
      <div className={`project-grid ${pro.id % 2 === 0 ? 'right' : 'left'}`}>
        {Slider(pro)}
        <div className={`text-container`}>
          <h2>{pro.title}</h2>
          <p>{pro.text}</p>
        </div>
        <img src={pro.image} />
        </div>
    </div>
  );
  return projectList;
}

export default () => (

  <div className="projects-container" id="projects">
    {projects()}
  </div>
)