import React from 'react';

const sliderFunctions = 
  {
    1: (el) => {
      return (
<div className={`slider-box slider-1 ${el.id % 2 === 0 ? 'right' : 'left'}`}>
          <div className="slider-bar bar-1"></div>
          <div className="slider-bar bar-2"></div>
          <div className="slider-bar bar-3"></div>
          <div className="slider-bar bar-4"></div>
          <div className="slider-bar bar-5"></div>
        </div>
        )
    },
    2: (el) => {
        return (
<div className={`slider-box slider-2 ${el.id % 2 === 0 ? 'right' : 'left'}`}>
            <div className="slider-bar bar-1"></div>
            <div className="slider-bar bar-2"></div>
            <div className="slider-bar bar-3"></div>
            <div className="slider-bar bar-4"></div>
            <div className="slider-bar bar-5"></div>
            <div className="slider-bar bar-6"></div>
            <div className="slider-bar bar-7"></div>
          </div>
          )
      },
    3: (el) => {
        return (
<div className={`slider-box slider-3 ${el.id % 2 === 0 ? 'right' : 'left'}`}>
            <div className="slider-bar bar-1"></div>
            <div className="slider-bar bar-2"></div>
            <div className="slider-bar bar-3"></div>
            <div className="slider-bar bar-4"></div>
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

const Slider = (el) => {
  return (
    sliderFunctions[el.id](el)
  )}

  export default Slider;