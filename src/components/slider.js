import React from 'react';

const sliderFunctions = 
  {
    1: (el) => {
      return (
<div className={`slider-grid slider-1 ${el.id % 2 === 0 ? 'right' : 'left'}`}>          <div className="slider-bar" id="bar-1"></div>
          <div className="slider-bar" id="bar-2"></div>
          <div className="slider-bar" id="bar-3"></div>
          <div className="slider-bar" id="bar-4"></div>
          <div className="slider-bar" id="bar-5"></div>
        </div>
        )
    },
    2: (el) => {
        return (
<div className={`slider-grid slider-2 ${el.id % 2 === 0 ? 'right' : 'left'}`}>            <div className="slider-bar" id="bar-1"></div>
            <div className="slider-bar" id="bar-2"></div>
            <div className="slider-bar" id="bar-3"></div>
            <div className="slider-bar" id="bar-4"></div>
            <div className="slider-bar" id="bar-5"></div>
            <div className="slider-bar" id="bar-6"></div>
            <div className="slider-bar" id="bar-7"></div>
            <div className="slider-bar" id="bar-8"></div>
          </div>
          )
      },
    3: (el) => {
        return (
<div className={`slider-grid slider-3 ${el.id % 2 === 0 ? 'right' : 'left'}`}>            <div className="slider-bar" id="bar-1"></div>
            <div className="slider-bar" id="bar-2"></div>
            <div className="slider-bar" id="bar-3"></div>
            <div className="slider-bar" id="bar-4"></div>
          </div>
          )
      },

    4: (el) => {
        return (
<div className={`slider-grid slider-4 ${el.id % 2 === 0 ? 'right' : 'left'}`}>            <div className="slider-bar" id="bar-1"></div>
            <div className="slider-bar" id="bar-2"></div>
            <div className="slider-bar" id="bar-3"></div>
            <div className="slider-bar" id="bar-4"></div>
            <div className="slider-bar" id="bar-5"></div>
            <div className="slider-bar" id="bar-6"></div>
            <div className="slider-bar" id="bar-7"></div>
            <div className="slider-bar" id="bar-8"></div>
            <div className="slider-bar" id="bar-9"></div>
            <div className="slider-bar" id="bar-10"></div>
            <div className="slider-bar" id="bar-11"></div>
          </div>
          )
      },

    5: (el) => {
        return (
          <div className={`slider-grid slider-5 ${el.id % 2 === 0 ? 'right' : 'left'}`}>
            <div className="slider-bar" id="bar-1"></div>
            <div className="slider-bar" id="bar-2"></div>
            <div className="slider-bar" id="bar-3"></div>
            <div className="slider-bar" id="bar-4"></div>
            <div className="slider-bar" id="bar-5"></div>
            <div className="slider-bar" id="bar-6"></div>
          </div>
          )
      },
  }

const Slider = (el) => {
  return (
    sliderFunctions[el.id](el)
  )}

  export default Slider;