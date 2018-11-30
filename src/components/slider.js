import React from 'react';

const sliderFunctions = 
  {
    1: (el) => {
      return (
<div className={`slider-box slider-1 ${el.id % 2 === 0 ? 'right' : 'left'}`}>
          <div className="slider-bar bar-1 horizontal-slider"></div>
          <div className="slider-bar bar-2 horizontal-slider"></div>
          <div className="slider-bar bar-3 horizontal-slider"></div>
          <div className="slider-bar bar-4 horizontal-slider"></div>
          <div className="slider-bar bar-5 horizontal-slider"></div>
        </div>
        )
    },
    2: (el) => {
        return (
<div className={`slider-box slider-2 ${el.id % 2 === 0 ? 'right' : 'left'}`}>
            <div className="slider-bar bar-1 vertical-slider"></div>
            <div className="slider-bar bar-2 vertical-slider"></div>
            <div className="slider-bar bar-3 vertical-slider"></div>
            <div className="slider-bar bar-4 vertical-slider"></div>
            <div className="slider-bar bar-5 vertical-slider"></div>
            <div className="slider-bar bar-6 vertical-slider"></div>
            <div className="slider-bar bar-7 vertical-slider"></div>
          </div>
          )
      },
    3: (el) => {
        return (
<div className={`slider-box slider-3 ${el.id % 2 === 0 ? 'right' : 'left'}`}>
            <div className="slider-bar bar-1 vertical-slider"></div>
            <div className="slider-bar bar-2 vertical-slider"></div>
            <div className="slider-bar bar-3 vertical-slider"></div>
            <div className="slider-bar bar-4 vertical-slider"></div>
          </div>
          )
      },

    4: (el) => {
        return (
<div className={`slider-box slider-4 ${el.id % 2 === 0 ? 'right' : 'left'}`}>
            <div className="slider-bar bar-1"></div>
            <div className="slider-bar bar-2"></div>
            <div className="slider-bar bar-3"></div>
            <div className="slider-bar bar-4"></div>
            <div className="slider-bar bar-5"></div>
            <div className="slider-bar bar-6"></div>
            <div className="slider-bar bar-7"></div>
            <div className="slider-bar bar-8"></div>
            <div className="slider-bar bar-9"></div>
            <div className="slider-bar bar-10"></div>
            <div className="slider-bar bar-11"></div>
          </div>
          )
      },

    5: (el) => {
        return (
          <div className={`slider-box slider-5 ${el.id % 2 === 0 ? 'right' : 'left'}`}>
            <div className="slider-bar bar-1"></div>
            <div className="slider-bar bar-2"></div>
            <div className="slider-bar bar-3"></div>
            <div className="slider-bar bar-4"></div>
            <div className="slider-bar bar-5"></div>
            <div className="slider-bar bar-6"></div>
          </div>
          )
      },
  }

/* -------------- Slider triggers animation when in viewport - */

  var sliderElement1;
  var sliderElement2;
  var sliderElement3;

  window.addEventListener("load", function(event) {
    sliderElement1 = document.querySelector(".slider-1");
    sliderElement2 = document.querySelector(".slider-2");
    sliderElement3 = document.querySelector(".slider-3");
  
    createObserver();
  }, false);

  function createObserver() {
    var observer;
  
    var options = {
        root: null,
        rootMargin: '0px',
        threshold:  [0, 0.25, 0.5, 0.75, 1]
      };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(sliderElement1);
    observer.observe(sliderElement2);
    observer.observe(sliderElement3);
  }

  function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0.3) {
        entry.target.style.backgroundColor = "transparent";
      }
      else {
        entry.target.style.backgroundColor = "black";
      }
    })
  }

/* --------------------------------- Return sliders ------- */

const Slider = (el) => {
  return (
    sliderFunctions[el.id](el)
  )}

  export default Slider;