import React from 'react';

const sliderFunctions =
{
  1: (el) => {
    return (
      <a href={el.link} target="_blank">
        <div
          className={`slider-box slider-1 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        >
          <div className="slider-bar bar-1 horizontal-slider-close"></div>
          <div className="slider-bar bar-2 horizontal-slider-close"></div>
          <div className="slider-bar bar-3 horizontal-slider-close"></div>
          <div className="slider-bar bar-4 horizontal-slider-close"></div>
          <div className="slider-bar bar-5 horizontal-slider-close"></div>
        </div>
      </a>
    )
  },
  2: (el) => {
    return (
      <a href={el.link} target="_blank">
        <div
          className={`slider-box slider-2 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        >
          <div className="slider-bar bar-1 vertical-slider-close"></div>
          <div className="slider-bar bar-2 vertical-slider-close"></div>
          <div className="slider-bar bar-3 vertical-slider-close"></div>
          <div className="slider-bar bar-4 vertical-slider-close"></div>
          <div className="slider-bar bar-5 vertical-slider-close"></div>
          <div className="slider-bar bar-6 vertical-slider-close"></div>
          <div className="slider-bar bar-7 vertical-slider-close"></div>
        </div>
      </a>
    )
  },
  3: (el) => {
    return (
      <a href={el.link} target="_blank">
        <div
          className={`slider-box slider-3 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        >
          <div className="slider-bar bar-1 vertical-slider-close"></div>
          <div className="slider-bar bar-2 vertical-slider-close"></div>
          <div className="slider-bar bar-3 vertical-slider-close"></div>
          <div className="slider-bar bar-4 vertical-slider-close"></div>
        </div>
      </a>
    )
  },

  4: (el) => {
    return (
      <a href={el.link} target="_blank">
        <div
          className={`slider-box slider-4 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        >
          <div className="slider-bar bar-1 horizontal-slider-close"></div>
          <div className="slider-bar bar-2 horizontal-slider-close"></div>
          <div className="slider-bar bar-3 horizontal-slider-close"></div>
          <div className="slider-bar bar-4 horizontal-slider-close"></div>
          <div className="slider-bar bar-5 horizontal-slider-close"></div>
          <div className="slider-bar bar-6 horizontal-slider-close"></div>
          <div className="slider-bar bar-7 horizontal-slider-close"></div>
          <div className="slider-bar bar-8 horizontal-slider-close"></div>
          <div className="slider-bar bar-9 horizontal-slider-close"></div>
          <div className="slider-bar bar-10 horizontal-slider-close"></div>
          <div className="slider-bar bar-11 horizontal-slider-close"></div>
        </div>
      </a>
    )
  },

  5: (el) => {
    return (
      <a href={el.link} target="_blank">
        <div
          className={`slider-box slider-5 ${el.id % 2 === 0 ? 'right' : 'left'}`}
        >
          <div className="slider-bar bar-1 vertical-slider-close"></div>
          <div className="slider-bar bar-2 vertical-slider-close"></div>
          <div className="slider-bar bar-3 vertical-slider-close"></div>
          <div className="slider-bar bar-4 vertical-slider-close"></div>
          <div className="slider-bar bar-5 vertical-slider-close"></div>
          <div className="slider-bar bar-6 vertical-slider-close"></div>
        </div>
      </a>
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
    if (entry.intersectionRatio > 0.5) {
      entry.target.style.backgroundColor = "transparent";
      const elChildren = entry.target.children;
      const numberOfChildren = elChildren.length;

      for (let i = 0; i < numberOfChildren; i++) {
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

      for (let i = 0; i < numberOfChildren; i++) {
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