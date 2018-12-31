import React from 'react';
import Slider from './slider.js';
import clockImg from '/home/jeff/git_workspace/JeffAbney/dist/images/pomodoro.png';
import drumMachineImg from '/home/jeff/git_workspace/JeffAbney/src/static/images/DRUMS-IMG.jpg';
import randomQuoteImg from '/home/jeff/git_workspace/JeffAbney/src/static/images/quote.png';


const proArr = [
  {
    id: 1,
    title: 'Pomodoro Clock',
    text: 'React - CSS - Animation',
    image: clockImg,
    link: '/pomodoro'
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
      <div
        className={`project-grid ${pro.id % 2 === 0 ? 'right' : 'left'}`}
        id={`project-grid-${pro.id}`}>
        {Slider(pro)}
        <div className={`text-container`}>
          <a href={pro.link} target="_blank">
            <h2>{pro.title}</h2>
            <p>{pro.text}</p>
          </a>
        </div>
        <a href={pro.link} target="_blank">
          <img src={pro.image} />
        </a>
      </div>
    </div>
  );
  return projectList;
}

export default () => (

  <div className="projects-container" id="projects">
    <div className="projects-header">
      <h2>Projects</h2>
    </div>
    {projects()}
  </div>
)