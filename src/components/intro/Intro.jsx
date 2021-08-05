import React from 'react';
import './Intro.scss';
import circleguitar from '../../assets/img/circleguitarpic.png';

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__left">
        <div className="intro__heading">
          <h2>Hello, I'm</h2>
          <h1 className='intro__heading--primary'>Carlito Algarin</h1>
          <h3 className='intro__heading--sub'>Front-end Developer</h3>
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__image-container">
          <img
            src={circleguitar}
            alt="carlito playing guitar"
            className="intro__image-container--image"
          />
        </div>
      </div>
    </div>
  );
}
