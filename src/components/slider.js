import React from 'react';


const showProject = (event, el) => {
  let element = document.getElementById(`big-slider-${el.id}`);
  const oldClasses = element.className;
  const name = "disappear";
  const arr = element.className.split(" ");
  if (arr.indexOf(name) == -1) {
    element.className += " " + name;

    setTimeout(function () {
      document.getElementById(`project-grid-${el.id}`).style.display = 'none';
      document.getElementById(`project-${el.id}`).style.backgroundColor = '#1A1A1A';
      document.getElementById(`project-${el.id}`).style.justifyContent = 'center';
      document.getElementById(`${el.appId}`).style.display = 'flex';
      element.className = oldClasses;
      document.getElementById(`overlay-${el.id}`).className += " app-show";
    }
      , 1500)
  }

  //animation where full project slides into viewport
}


const sliderFunctions =
{
  1: (el) => {
    return (
      <div
        className={`slider-box slider-1 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        onClick={(e) => { showProject(e, el) }}
      >
        <div className="big-slider" id="big-slider-1"></div>
        <div className="slider-bar bar-1 horizontal-slider-open"></div>
        <div className="slider-bar bar-2 horizontal-slider-open"></div>
        <div className="slider-bar bar-3 horizontal-slider-open"></div>
        <div className="slider-bar bar-4 horizontal-slider-open"></div>
        <div className="slider-bar bar-5 horizontal-slider-open"></div>
      </div>
    )
  },
  2: (el) => {
    return (
      <div
        className={`slider-box slider-2 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        onClick={(e) => { showProject(e, el) }}
      >
        <div className="big-slider" id="big-slider-2"></div>
        <div className="slider-bar bar-1 vertical-slider-open"></div>
        <div className="slider-bar bar-2 vertical-slider-open"></div>
        <div className="slider-bar bar-3 vertical-slider-open"></div>
        <div className="slider-bar bar-4 vertical-slider-open"></div>
        <div className="slider-bar bar-5 vertical-slider-open"></div>
        <div className="slider-bar bar-6 vertical-slider-open"></div>
        <div className="slider-bar bar-7 vertical-slider-open"></div>
      </div>
    )
  },
  3: (el) => {
    return (
      <div
        className={`slider-box slider-3 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        onClick={(e) => { showProject(e, el) }}
      >
        <div className="big-slider" id="big-slider-3"></div>
        <div className="slider-bar bar-1 vertical-slider-open"></div>
        <div className="slider-bar bar-2 vertical-slider-open"></div>
        <div className="slider-bar bar-3 vertical-slider-open"></div>
        <div className="slider-bar bar-4 vertical-slider-open"></div>
      </div>
    )
  },

  4: (el) => {
    return (
      <div
        className={`slider-box slider-4 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        onClick={(e) => { showProject(e, el) }}
      >
        <div className="big-slider" id="big-slider-4"></div>
        <div className="slider-bar bar-1 horizontal-slider-open"></div>
        <div className="slider-bar bar-2 horizontal-slider-open"></div>
        <div className="slider-bar bar-3 horizontal-slider-open"></div>
        <div className="slider-bar bar-4 horizontal-slider-open"></div>
        <div className="slider-bar bar-5 horizontal-slider-open"></div>
        <div className="slider-bar bar-6 horizontal-slider-open"></div>
        <div className="slider-bar bar-7 horizontal-slider-open"></div>
        <div className="slider-bar bar-8 horizontal-slider-open"></div>
        <div className="slider-bar bar-9 horizontal-slider-open"></div>
        <div className="slider-bar bar-10 horizontal-slider-open"></div>
        <div className="slider-bar bar-11 horizontal-slider-open"></div>
      </div>
    )
  },

  5: (el) => {
    return (
      <div
        className={`slider-box slider-5 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        onClick={(e) => { showProject(e, el) }}
      >
        <div className="big-slider" id="big-slider-5"></div>
        <div className="slider-bar bar-1 vertical-slider-open"></div>
        <div className="slider-bar bar-2 vertical-slider-open"></div>
        <div className="slider-bar bar-3 vertical-slider-open"></div>
        <div className="slider-bar bar-4 vertical-slider-open"></div>
        <div className="slider-bar bar-5 vertical-slider-open"></div>
        <div className="slider-bar bar-6 vertical-slider-open"></div>
      </div>
    )
  },
}

/* -------------- Slider triggers animation when in viewport - */

var sliderElement1;
var sliderElement2;
var sliderElement3;
var sliderElement4;
var sliderElement5;

window.addEventListener("load", function (event) {
  sliderElement1 = document.querySelector(".slider-1");
  sliderElement2 = document.querySelector(".slider-2");
  sliderElement3 = document.querySelector(".slider-3");
  sliderElement4 = document.querySelector(".slider-4");
  sliderElement5 = document.querySelector(".slider-5");

  createObserver();
}, false);

function createObserver() {
  var observer;

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(sliderElement1);
  observer.observe(sliderElement2);
  observer.observe(sliderElement3);
  observer.observe(sliderElement4);
  observer.observe(sliderElement5);
}

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0.4) {
      entry.target.style.backgroundColor = "transparent";
      const elChildren = entry.target.children;
      const numberOfChildren = elChildren.length;

      for (let i = 1; i < numberOfChildren; i++) {
        var name, arr;
        name = "play";
        arr = elChildren[i].className.split(" ");
        regEx = /close$/g;
        isMatch = (className) => regEx.test(className);
        arr.map((className) => {
          if (isMatch(className)) {
            const oldClassList = elChildren[i].className;
            const changeClassName = (className) => className.replace('close', 'open');
            const newClassName = changeClassName(className);
            elChildren[i].className = oldClassList.replace(className, newClassName);
          }
        })
        if (arr.indexOf(name) == -1) {
          elChildren[i].className += " " + name;
        }
      }

    } else {

      const elChildren = entry.target.children;
      const numberOfChildren = elChildren.length;

      for (let i = 1; i < numberOfChildren; i++) {
        var name, arr, regEx, isMatch;
        name = "play";
        arr = elChildren[i].className.split(" ");
        regEx = /open$/g;
        isMatch = (className) => regEx.test(className);

        if (arr.indexOf(name) > -1) {
          arr.map((className) => {
            if (isMatch(className)) {
              const oldClassList = elChildren[i].className;
              const changeClassName = (className) => className.replace('open', 'close');
              const newClassName = changeClassName(className);
              elChildren[i].className = oldClassList.replace(className, newClassName);
            }
          })
        }
      }
    }
  })
}

/* --------------------------------- Return sliders ------- */

const Slider = (el) => {
  return (
    sliderFunctions[el.id](el)
  )
}

export default Slider;