import React from 'react';
import './Works.scss';
import bubbles from '../../assets/img/bubbles.jpeg';

export default function Works() {
  return (
    <div>
      <h1 className='h1test'>My Work</h1>

      <div className="work">
        <h1 className='h1test2'>My Work</h1>
        <img src={bubbles} alt="" className="work__image work__image--p1" />
        <img src={bubbles} alt="" className="work__image work__image--p2" />
        <img src={bubbles} alt="" className="work__image work__image--p3" />
        <img src={bubbles} alt="" className="work__image work__image--p4" />
        <img src={bubbles} alt="" className="work__image work__image--p5" />
        <img src={bubbles} alt="" className="work__image work__image--p6" />
      </div>
    </div>
  );
}
