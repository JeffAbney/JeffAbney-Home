import React from 'react';
import Slider from './slider.js';
import clockImg from '/home/jeff/git_workspace/JeffAbney/dist/images/pomodoro.png';
import drumMachineImg from '/home/jeff/git_workspace/JeffAbney/src/static/images/DRUMS-IMG.jpg';
import randomQuoteImg from '/home/jeff/git_workspace/JeffAbney/src/static/images/quote.png';
import calculatorImg from '/home/jeff/git_workspace/JeffAbney/src/static/images/calculadora_img.jpg';
import JAcomImg from '/home/jeff/git_workspace/JeffAbney/src/static/images/JAcom.jpg';


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
    image: drumMachineImg,
    link: '/drumMachine'
  },
  {
    id: 3,
    title: 'Random Quote Machine',
    text: 'React - API Connected - CSS',
    image: randomQuoteImg,
    link: '/randomQuote'
  },
  {
    id: 4,
    title: 'Calculator',
    text: 'Javascript - React - CSS',
    image: calculatorImg,
    link: '/calculator'
  },
  {
    id: 5,
    title: 'JeffAbney.com',
    text: 'Javascript - React - SCSS - Animation',
    image: JAcomImg,
    link: 'https://github.com/JeffAbney/JeffAbney-Home'
  },

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
            <h3>{pro.title}</h3>
            <p>{pro.text}</p>
          </a>
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